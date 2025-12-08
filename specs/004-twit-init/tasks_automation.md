# Twitter Dual-Account Automation Tasks & Pipelines

**Feature ID**: 004-twit-init
**Automation Version**: 1.0.0
**Created**: 2025-12-08
**Owner**: Frank (frank@agentii.ai)
**Timeline**: Phases 1-4 (Weeks 1-13)

---

## Executive Summary: Automation Strategy

This document outlines **semi-automated workflows** using Twitter API v2 to scale your dual-account strategy while maintaining authenticity. The approach balances automation (for efficiency) with human oversight (for quality and compliance).

**Core Principle**: Automate the mechanical, human-approve the strategic.

---

## Phase 0: Automation Infrastructure Setup (Week 0 - Before Launch)

### Task 0.1: Twitter API Access & Authentication Setup

**Owner**: Technical Lead (Frank)
**Effort**: 4-6 hours
**Priority**: CRITICAL - Required for all automation
**Dependencies**: None (can start immediately)

#### Step 1: Apply for Twitter API Access

**Deliverables**:
- [ ] Go to https://developer.twitter.com/en/portal/dashboard
- [ ] Click "Sign up for Free Account" or "Apply for Elevated Access"
- [ ] Choose **"Building tools for Twitter users"** use case
- [ ] Complete application form:
  - **Project name**: "Agentii Dual-Account Growth Automation"
  - **Project description**: "Semi-automated content publishing and engagement system for dual Twitter accounts (@agentii_ai and @frank_agentii) supporting AI product launch and organic growth"
  - **Use case details**:
    - Schedule and publish tweet threads from blog content
    - Monitor mentions and replies for engagement opportunities
    - Track analytics for growth metrics
    - Automated content repurposing from Nextra blog to Twitter threads
- [ ] Specify you will NOT:
  - Engage in spam or aggressive automation
  - Use automation for mass-following/unfollowing
  - Send automated DMs without user consent
- [ ] Submit application and wait for approval (typically 1-3 days)

#### Step 2: Create Twitter App and Get API Keys

**After approval**:
- [ ] Create new App in Twitter Developer Portal
- [ ] App name: `agentii-twitter-automation`
- [ ] App permissions: **Read and Write** (for posting tweets and replies)
- [ ] Enable OAuth 2.0 with PKCE
- [ ] Generate API keys:
  - **API Key** (Consumer Key)
  - **API Secret Key** (Consumer Secret)
  - **Bearer Token**
  - **Access Token** (for @agentii_ai)
  - **Access Token Secret** (for @agentii_ai)
- [ ] Repeat OAuth flow for @frank_agentii account
- [ ] Store all credentials securely in `.env` file (NEVER commit to git)

#### Step 3: Set Up Development Environment

**Deliverables**:
- [ ] Create project directory: `/Users/frank/X/agentii-kit/.twitter-automation/`
- [ ] Initialize Node.js project:
  ```bash
  cd /Users/frank/X/agentii-kit/.twitter-automation/
  npm init -y
  ```
- [ ] Install required packages:
  ```bash
  npm install twitter-api-v2 dotenv node-cron gray-matter openai
  ```
- [ ] Create `.env` file structure:
  ```env
  # Twitter API Credentials for @agentii_ai
  AGENTII_AI_API_KEY=your_api_key_here
  AGENTII_AI_API_SECRET=your_api_secret_here
  AGENTII_AI_ACCESS_TOKEN=your_access_token_here
  AGENTII_AI_ACCESS_SECRET=your_access_secret_here

  # Twitter API Credentials for @frank_agentii
  FRANK_AGENTII_API_KEY=your_api_key_here
  FRANK_AGENTII_API_SECRET=your_api_secret_here
  FRANK_AGENTII_ACCESS_TOKEN=your_access_token_here
  FRANK_AGENTII_ACCESS_SECRET=your_access_secret_here

  # OpenAI API for AI-assisted reply drafting (optional)
  OPENAI_API_KEY=your_openai_key_here
  ```
- [ ] Add `.env` to `.gitignore`:
  ```bash
  echo ".env" >> /Users/frank/X/agentii-kit/.gitignore
  echo ".twitter-automation/.env" >> /Users/frank/X/agentii-kit/.gitignore
  ```

#### Step 4: Test API Connection

**Create test script** (`test-connection.js`):

```javascript
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// Initialize clients for both accounts
const agentiiClient = new TwitterApi({
  appKey: process.env.AGENTII_AI_API_KEY,
  appSecret: process.env.AGENTII_AI_API_SECRET,
  accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
  accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
});

const frankClient = new TwitterApi({
  appKey: process.env.FRANK_AGENTII_API_KEY,
  appSecret: process.env.FRANK_AGENTII_API_SECRET,
  accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
  accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
});

async function testConnection() {
  try {
    // Test @agentii_ai
    const agentiiUser = await agentiiClient.v2.me();
    console.log('✅ Connected to @agentii_ai:', agentiiUser.data.username);

    // Test @frank_agentii
    const frankUser = await frankClient.v2.me();
    console.log('✅ Connected to @frank_agentii:', frankUser.data.username);

    console.log('\n🎉 All connections successful!');
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
}

testConnection();
```

**Run test**:
```bash
node test-connection.js
```

**Exit Criteria**: Successfully authenticated to both Twitter accounts, API connections verified

---

### Task 0.2: Blog-to-Thread Conversion Pipeline Setup

**Owner**: Technical Lead (Frank)
**Effort**: 6-8 hours
**Priority**: HIGH - Core automation feature
**Dependencies**: Task 0.1 complete (API access)

#### Architecture Overview

```
[Nextra Blog MDX] → [Parser] → [Thread Generator] → [Human Review] → [Scheduler] → [Twitter API]
```

#### Step 1: Create MDX Blog Parser

**File**: `.twitter-automation/parsers/blog-parser.js`

```javascript
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

class BlogParser {
  /**
   * Parse a Nextra MDX blog post into thread-ready chunks
   * @param {string} filePath - Path to MDX file
   * @returns {Object} Parsed blog data with thread suggestions
   */
  parseBlogPost(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(fileContent);

    return {
      frontMatter,
      content,
      threadSuggestions: this.generateThreadFromContent(content, frontMatter)
    };
  }

  /**
   * Convert blog content into Twitter thread structure
   * @param {string} content - Blog content
   * @param {Object} frontMatter - Blog metadata
   * @returns {Array} Array of tweet objects
   */
  generateThreadFromContent(content, frontMatter) {
    const tweets = [];

    // Tweet 1: Hook from blog title/description
    tweets.push({
      text: this.createHook(frontMatter.title, frontMatter.description),
      type: 'hook'
    });

    // Parse headings and content sections
    const sections = this.extractSections(content);

    sections.forEach((section, index) => {
      // Convert each major section to 1-2 tweets
      const sectionTweets = this.sectionToTweets(section, index + 2);
      tweets.push(...sectionTweets);
    });

    // Final tweet: CTA
    tweets.push({
      text: this.createCTA(frontMatter),
      type: 'cta'
    });

    return tweets;
  }

  createHook(title, description) {
    // Create curiosity gap hook
    const hookTemplates = [
      `${title}\n\nHere's what most people miss 👇`,
      `I just published: ${title}\n\nKey insights in this thread 🧵`,
      `${description}\n\nLet me break it down 👇`
    ];

    return hookTemplates[0]; // Use first template, can randomize
  }

  extractSections(content) {
    // Split content by H2 headings (##)
    const sections = [];
    const h2Regex = /^## (.+)$/gm;
    let match;
    let lastIndex = 0;

    while ((match = h2Regex.exec(content)) !== null) {
      if (lastIndex > 0) {
        const sectionContent = content.slice(lastIndex, match.index);
        sections.push({
          heading: content.slice(lastIndex, match.index).split('\n')[0].replace('## ', ''),
          content: sectionContent
        });
      }
      lastIndex = match.index;
    }

    // Add last section
    if (lastIndex > 0) {
      sections.push({
        heading: content.slice(lastIndex).split('\n')[0].replace('## ', ''),
        content: content.slice(lastIndex)
      });
    }

    return sections;
  }

  sectionToTweets(section, startNumber) {
    const tweets = [];
    const maxLength = 280;

    // Heading as tweet
    let tweetText = `${startNumber}/ ${section.heading}\n\n`;

    // Extract key points from section
    const keyPoints = this.extractKeyPoints(section.content);

    keyPoints.forEach((point, index) => {
      if ((tweetText + point).length > maxLength - 20) {
        // Tweet is getting too long, start new one
        tweets.push({ text: tweetText.trim(), type: 'content' });
        tweetText = `${startNumber + tweets.length}/ `;
      }
      tweetText += point + '\n\n';
    });

    if (tweetText.length > 0) {
      tweets.push({ text: tweetText.trim(), type: 'content' });
    }

    return tweets;
  }

  extractKeyPoints(content) {
    // Extract bullet points, numbered lists, or key sentences
    const points = [];
    const lines = content.split('\n');

    lines.forEach(line => {
      // Match bullet points
      if (line.match(/^[-*]\s+(.+)/)) {
        points.push(line.replace(/^[-*]\s+/, '• '));
      }
      // Match numbered lists
      else if (line.match(/^\d+\.\s+(.+)/)) {
        points.push(line);
      }
      // Extract sentences with strong keywords
      else if (line.match(/\b(key|important|critical|essential|must|should|never)\b/i)) {
        points.push(line.trim());
      }
    });

    return points.slice(0, 5); // Limit to 5 key points per section
  }

  createCTA(frontMatter) {
    const account = frontMatter.tags?.includes('investing') ? '@agentii_ai' : '@frank_agentii';
    const blogUrl = frontMatter.url || '';

    return `Full article with code examples and details:\n${blogUrl}\n\nFollow ${account} for more insights like this 🚀`;
  }
}

module.exports = BlogParser;
```

**Deliverables**:
- [ ] BlogParser class created with MDX parsing
- [ ] Automatic thread generation from blog headings
- [ ] Hook and CTA creation logic
- [ ] Character limit enforcement (280 chars/tweet)

#### Step 2: Create Thread Scheduler

**File**: `.twitter-automation/scheduler/thread-scheduler.js`

```javascript
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
const path = require('path');

class ThreadScheduler {
  constructor(accountType = 'agentii_ai') {
    // Initialize Twitter client based on account
    const credentials = accountType === 'agentii_ai' ? {
      appKey: process.env.AGENTII_AI_API_KEY,
      appSecret: process.env.AGENTII_AI_API_SECRET,
      accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
      accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
    } : {
      appKey: process.env.FRANK_AGENTII_API_KEY,
      appSecret: process.env.FRANK_AGENTII_API_SECRET,
      accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
      accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
    };

    this.client = new TwitterApi(credentials);
    this.accountType = accountType;
    this.queueFile = path.join(__dirname, `../queue/${accountType}-queue.json`);
  }

  /**
   * Add thread to publishing queue
   * @param {Array} tweets - Array of tweet objects
   * @param {Date} scheduledTime - When to publish
   * @param {Object} metadata - Additional metadata
   */
  scheduleThread(tweets, scheduledTime, metadata = {}) {
    const queue = this.loadQueue();

    const threadEntry = {
      id: `thread_${Date.now()}`,
      tweets,
      scheduledTime: scheduledTime.toISOString(),
      status: 'pending', // pending | approved | published | failed
      metadata: {
        ...metadata,
        createdAt: new Date().toISOString(),
        account: this.accountType
      }
    };

    queue.push(threadEntry);
    this.saveQueue(queue);

    console.log(`✅ Thread scheduled for ${scheduledTime} on @${this.accountType}`);
    return threadEntry;
  }

  /**
   * Publish a thread immediately
   * @param {Array} tweets - Array of tweet objects
   * @returns {Object} Published thread details
   */
  async publishThread(tweets) {
    try {
      const tweetIds = [];
      let previousTweetId = null;

      for (const tweet of tweets) {
        const tweetData = {
          text: tweet.text
        };

        // Reply to previous tweet to create thread
        if (previousTweetId) {
          tweetData.reply = {
            in_reply_to_tweet_id: previousTweetId
          };
        }

        const response = await this.client.v2.tweet(tweetData);
        previousTweetId = response.data.id;
        tweetIds.push(response.data.id);

        console.log(`📤 Published tweet ${tweetIds.length}/${tweets.length}`);

        // Rate limit: Wait 1 second between tweets
        await this.sleep(1000);
      }

      console.log(`✅ Thread published successfully! ${tweetIds.length} tweets`);
      return {
        success: true,
        tweetIds,
        threadUrl: `https://twitter.com/${this.accountType}/status/${tweetIds[0]}`
      };

    } catch (error) {
      console.error('❌ Failed to publish thread:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Process scheduled queue (run via cron job)
   */
  async processQueue() {
    const queue = this.loadQueue();
    const now = new Date();

    for (const entry of queue) {
      if (entry.status !== 'approved') continue;

      const scheduledTime = new Date(entry.scheduledTime);

      // Check if it's time to publish (within 5 minute window)
      if (scheduledTime <= now && scheduledTime >= new Date(now - 5 * 60 * 1000)) {
        console.log(`⏰ Publishing scheduled thread: ${entry.id}`);

        const result = await this.publishThread(entry.tweets);

        if (result.success) {
          entry.status = 'published';
          entry.metadata.publishedAt = new Date().toISOString();
          entry.metadata.threadUrl = result.threadUrl;
        } else {
          entry.status = 'failed';
          entry.metadata.error = result.error;
        }

        this.saveQueue(queue);
      }
    }
  }

  /**
   * Get pending threads for human review
   */
  getPendingThreads() {
    const queue = this.loadQueue();
    return queue.filter(entry => entry.status === 'pending');
  }

  /**
   * Approve a thread for publishing
   */
  approveThread(threadId) {
    const queue = this.loadQueue();
    const entry = queue.find(t => t.id === threadId);

    if (entry) {
      entry.status = 'approved';
      entry.metadata.approvedAt = new Date().toISOString();
      this.saveQueue(queue);
      console.log(`✅ Thread ${threadId} approved for publishing`);
    }
  }

  loadQueue() {
    if (!fs.existsSync(this.queueFile)) {
      return [];
    }
    return JSON.parse(fs.readFileSync(this.queueFile, 'utf-8'));
  }

  saveQueue(queue) {
    const dir = path.dirname(this.queueFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(this.queueFile, JSON.stringify(queue, null, 2));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = ThreadScheduler;
```

**Deliverables**:
- [ ] ThreadScheduler class for queue management
- [ ] Thread publishing with proper reply chaining
- [ ] Approval workflow (human-in-the-loop)
- [ ] Queue persistence to JSON files
- [ ] Rate limit handling (1 second between tweets)

#### Step 3: Create CLI for Manual Review & Approval

**File**: `.twitter-automation/cli/review-threads.js`

```javascript
const readline = require('readline');
const ThreadScheduler = require('../scheduler/thread-scheduler');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function reviewThreads() {
  const schedulerAgentii = new ThreadScheduler('agentii_ai');
  const schedulerFrank = new ThreadScheduler('frank_agentii');

  console.log('\n=== THREAD REVIEW INTERFACE ===\n');

  // Get pending threads from both accounts
  const pendingAgentii = schedulerAgentii.getPendingThreads();
  const pendingFrank = schedulerFrank.getPendingThreads();

  if (pendingAgentii.length === 0 && pendingFrank.length === 0) {
    console.log('✅ No pending threads to review');
    rl.close();
    return;
  }

  console.log(`📋 Found ${pendingAgentii.length} pending threads for @agentii_ai`);
  console.log(`📋 Found ${pendingFrank.length} pending threads for @frank_agentii\n`);

  // Review each thread
  for (const thread of [...pendingAgentii, ...pendingFrank]) {
    console.log(`\n--- Thread ID: ${thread.id} ---`);
    console.log(`Account: @${thread.metadata.account}`);
    console.log(`Scheduled: ${new Date(thread.scheduledTime).toLocaleString()}`);
    console.log(`Source: ${thread.metadata.blogPost || 'Manual'}\n`);

    thread.tweets.forEach((tweet, index) => {
      console.log(`Tweet ${index + 1}/${thread.tweets.length}:`);
      console.log(tweet.text);
      console.log(`(${tweet.text.length} chars)\n`);
    });

    const answer = await question('Approve this thread? (y/n/e for edit): ');

    if (answer.toLowerCase() === 'y') {
      const scheduler = thread.metadata.account === 'agentii_ai' ? schedulerAgentii : schedulerFrank;
      scheduler.approveThread(thread.id);
      console.log('✅ Thread approved!');
    } else if (answer.toLowerCase() === 'e') {
      console.log('📝 Edit feature coming soon. For now, edit queue JSON file manually.');
    } else {
      console.log('⏭️  Thread skipped');
    }
  }

  console.log('\n✅ Review complete!');
  rl.close();
}

function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

reviewThreads();
```

**Usage**:
```bash
node cli/review-threads.js
```

**Deliverables**:
- [ ] CLI tool for reviewing pending threads
- [ ] Display full thread preview before approval
- [ ] Approve/reject/edit workflow
- [ ] Character count validation

**Exit Criteria**: Blog-to-thread pipeline functional, threads can be generated from MDX, queued, reviewed, and published

---

### Task 0.3: Mention Monitoring & Reply Suggestion System

**Owner**: Technical Lead (Frank)
**Effort**: 5-7 hours
**Priority**: HIGH - Core engagement automation
**Dependencies**: Task 0.1 complete (API access)

#### Step 1: Create Mention Monitor

**File**: `.twitter-automation/monitoring/mention-monitor.js`

```javascript
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
const path = require('path');

class MentionMonitor {
  constructor(accountType = 'agentii_ai') {
    const credentials = accountType === 'agentii_ai' ? {
      appKey: process.env.AGENTII_AI_API_KEY,
      appSecret: process.env.AGENTII_AI_API_SECRET,
      accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
      accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
    } : {
      appKey: process.env.FRANK_AGENTII_API_KEY,
      appSecret: process.env.FRANK_AGENTII_API_SECRET,
      accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
      accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
    };

    this.client = new TwitterApi(credentials);
    this.accountType = accountType;
    this.mentionsFile = path.join(__dirname, `../data/${accountType}-mentions.json`);
    this.lastCheckFile = path.join(__dirname, `../data/${accountType}-last-check.txt`);
  }

  /**
   * Fetch new mentions since last check
   */
  async fetchNewMentions() {
    try {
      const me = await this.client.v2.me();
      const myUserId = me.data.id;

      // Get last check timestamp
      const sinceId = this.getLastCheckId();

      const params = {
        max_results: 100,
        'tweet.fields': ['created_at', 'author_id', 'conversation_id', 'in_reply_to_user_id'],
        'user.fields': ['username', 'name', 'public_metrics']
      };

      if (sinceId) {
        params.since_id = sinceId;
      }

      // Fetch mentions
      const mentions = await this.client.v2.userMentionTimeline(myUserId, params);

      const newMentions = [];
      for await (const mention of mentions) {
        newMentions.push({
          id: mention.id,
          text: mention.text,
          author_id: mention.author_id,
          author_username: mention.author?.username || 'unknown',
          created_at: mention.created_at,
          conversation_id: mention.conversation_id,
          needs_reply: true,
          status: 'pending' // pending | drafted | replied | ignored
        });
      }

      if (newMentions.length > 0) {
        // Save mentions
        this.saveMentions(newMentions);

        // Update last check ID
        this.saveLastCheckId(newMentions[0].id);

        console.log(`✅ Found ${newMentions.length} new mentions for @${this.accountType}`);
      } else {
        console.log(`ℹ️  No new mentions for @${this.accountType}`);
      }

      return newMentions;

    } catch (error) {
      console.error('❌ Error fetching mentions:', error);
      return [];
    }
  }

  /**
   * Get conversation context for a mention
   */
  async getConversationContext(conversationId, mentionId) {
    try {
      const tweets = await this.client.v2.search({
        query: `conversation_id:${conversationId}`,
        max_results: 100,
        'tweet.fields': ['created_at', 'author_id', 'in_reply_to_user_id']
      });

      const conversationTweets = [];
      for await (const tweet of tweets) {
        conversationTweets.push(tweet);
      }

      // Sort by created_at to get chronological order
      conversationTweets.sort((a, b) =>
        new Date(a.created_at) - new Date(b.created_at)
      );

      return conversationTweets;

    } catch (error) {
      console.error('❌ Error fetching conversation:', error);
      return [];
    }
  }

  saveMentions(mentions) {
    let existing = [];
    if (fs.existsSync(this.mentionsFile)) {
      existing = JSON.parse(fs.readFileSync(this.mentionsFile, 'utf-8'));
    }

    // Merge new mentions (avoid duplicates)
    const merged = [...mentions, ...existing].filter((mention, index, self) =>
      index === self.findIndex(m => m.id === mention.id)
    );

    const dir = path.dirname(this.mentionsFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(this.mentionsFile, JSON.stringify(merged, null, 2));
  }

  getLastCheckId() {
    if (fs.existsSync(this.lastCheckFile)) {
      return fs.readFileSync(this.lastCheckFile, 'utf-8').trim();
    }
    return null;
  }

  saveLastCheckId(tweetId) {
    const dir = path.dirname(this.lastCheckFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(this.lastCheckFile, tweetId);
  }

  getPendingMentions() {
    if (!fs.existsSync(this.mentionsFile)) {
      return [];
    }
    const mentions = JSON.parse(fs.readFileSync(this.mentionsFile, 'utf-8'));
    return mentions.filter(m => m.status === 'pending');
  }
}

module.exports = MentionMonitor;
```

#### Step 2: Create AI-Assisted Reply Drafter (Optional)

**File**: `.twitter-automation/ai/reply-drafter.js`

```javascript
require('dotenv').config();
const OpenAI = require('openai');

class ReplyDrafter {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  /**
   * Generate reply suggestions using AI
   * @param {Object} mention - The mention to reply to
   * @param {Array} conversationContext - Previous tweets in conversation
   * @param {string} accountType - 'agentii_ai' or 'frank_agentii'
   */
  async draftReply(mention, conversationContext = [], accountType = 'agentii_ai') {
    const systemPrompt = this.getSystemPrompt(accountType);

    const contextText = conversationContext.map(tweet =>
      `${tweet.author_username}: ${tweet.text}`
    ).join('\n');

    const userPrompt = `
Mention from @${mention.author_username}:
"${mention.text}"

Conversation context:
${contextText || 'None (this is the first mention)'}

Generate 2-3 reply options that:
1. Directly address their question/comment
2. Add unique value or insight
3. Are authentic and conversational
4. Stay under 280 characters
5. Match the voice and tone of @${accountType}

Format:
Option 1: [reply text]
Option 2: [reply text]
Option 3: [reply text]
`;

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      const reply = completion.choices[0].message.content;

      // Parse options
      const options = this.parseReplyOptions(reply);

      return options;

    } catch (error) {
      console.error('❌ Error generating reply:', error);
      return [];
    }
  }

  getSystemPrompt(accountType) {
    if (accountType === 'agentii_ai') {
      return `You are the voice of @agentii_ai, an AI-powered stock analysis tool for professional investors.

Your communication style:
- Professional but approachable
- Data-driven and specific (use numbers, examples)
- Educational (teach, don't just promote)
- Transparent about limitations
- Focus on institutional-grade analysis and market insights

Always:
- Answer questions thoroughly
- Provide specific examples when possible
- Acknowledge good points from others
- Ask follow-up questions to deepen the conversation
- Never be salesy or promotional

Never:
- Give financial advice ("this is not financial advice" disclaimer when needed)
- Make guarantees about stock performance
- Use hype language or exaggeration
- Engage with trolls or negativity`;
    } else {
      return `You are Frank, founder of agentii.ai and creator of open-source spec-driven development kits.

Your communication style:
- Authentic and vulnerable (share both wins and failures)
- Technical but accessible
- Opinionated but respectful
- Build-in-public mindset
- Developer-first language

Always:
- Share specific technical details and code when relevant
- Be honest about what worked and what didn't
- Provide actionable frameworks and templates
- Engage deeply with technical questions
- Show your thought process

Never:
- Be preachy or prescriptive ("this is how I do it" not "this is how you must do it")
- Oversell or hype
- Claim universal solutions (acknowledge context matters)
- Engage in framework wars or negativity`;
    }
  }

  parseReplyOptions(text) {
    const options = [];
    const optionRegex = /Option \d+:\s*(.+?)(?=Option \d+:|$)/gs;
    let match;

    while ((match = optionRegex.exec(text)) !== null) {
      const optionText = match[1].trim();
      if (optionText.length > 0 && optionText.length <= 280) {
        options.push(optionText);
      }
    }

    return options;
  }
}

module.exports = ReplyDrafter;
```

#### Step 3: Create Reply Review CLI

**File**: `.twitter-automation/cli/review-replies.js`

```javascript
const readline = require('readline');
const MentionMonitor = require('../monitoring/mention-monitor');
const ReplyDrafter = require('../ai/reply-drafter');
const { TwitterApi } = require('twitter-api-v2');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function reviewReplies() {
  const monitorAgentii = new MentionMonitor('agentii_ai');
  const monitorFrank = new MentionMonitor('frank_agentii');
  const drafter = new ReplyDrafter();

  console.log('\n=== REPLY REVIEW INTERFACE ===\n');

  const pendingAgentii = monitorAgentii.getPendingMentions();
  const pendingFrank = monitorFrank.getPendingMentions();

  if (pendingAgentii.length === 0 && pendingFrank.length === 0) {
    console.log('✅ No pending mentions to review');
    rl.close();
    return;
  }

  console.log(`📋 Found ${pendingAgentii.length} pending mentions for @agentii_ai`);
  console.log(`📋 Found ${pendingFrank.length} pending mentions for @frank_agentii\n`);

  for (const mention of [...pendingAgentii, ...pendingFrank]) {
    const accountType = mention.author_username.includes('agentii_ai') ? 'frank_agentii' : 'agentii_ai';
    const monitor = accountType === 'agentii_ai' ? monitorAgentii : monitorFrank;

    console.log(`\n--- Mention from @${mention.author_username} ---`);
    console.log(`"${mention.text}"`);
    console.log(`Posted: ${new Date(mention.created_at).toLocaleString()}\n`);

    // Generate AI reply suggestions
    console.log('🤖 Generating reply suggestions...\n');
    const suggestions = await drafter.draftReply(mention, [], accountType);

    if (suggestions.length > 0) {
      suggestions.forEach((suggestion, index) => {
        console.log(`Option ${index + 1}:`);
        console.log(suggestion);
        console.log(`(${suggestion.length} chars)\n`);
      });
    }

    const action = await question('Action? (1-3 to use option, c for custom, s to skip, i to ignore): ');

    if (action.match(/^[1-3]$/)) {
      const optionIndex = parseInt(action) - 1;
      const replyText = suggestions[optionIndex];

      console.log(`\n📤 Sending reply:\n"${replyText}"\n`);

      const confirm = await question('Confirm send? (y/n): ');
      if (confirm.toLowerCase() === 'y') {
        await sendReply(accountType, mention.id, replyText);
        mention.status = 'replied';
        monitor.saveMentions([mention]);
        console.log('✅ Reply sent!');
      }
    } else if (action.toLowerCase() === 'c') {
      const customReply = await question('Enter your reply: ');
      if (customReply.trim().length > 0) {
        await sendReply(accountType, mention.id, customReply);
        mention.status = 'replied';
        monitor.saveMentions([mention]);
        console.log('✅ Reply sent!');
      }
    } else if (action.toLowerCase() === 'i') {
      mention.status = 'ignored';
      monitor.saveMentions([mention]);
      console.log('⏭️  Mention ignored');
    } else {
      console.log('⏭️  Skipped for now');
    }
  }

  console.log('\n✅ Review complete!');
  rl.close();
}

async function sendReply(accountType, mentionId, replyText) {
  const credentials = accountType === 'agentii_ai' ? {
    appKey: process.env.AGENTII_AI_API_KEY,
    appSecret: process.env.AGENTII_AI_API_SECRET,
    accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
    accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
  } : {
    appKey: process.env.FRANK_AGENTII_API_KEY,
    appSecret: process.env.FRANK_AGENTII_API_SECRET,
    accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
    accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
  };

  const client = new TwitterApi(credentials);

  await client.v2.reply(replyText, mentionId);
}

function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

reviewReplies();
```

**Deliverables**:
- [ ] MentionMonitor class for tracking mentions
- [ ] ReplyDrafter with AI-assisted suggestions (optional)
- [ ] Reply review CLI with approve/edit/skip workflow
- [ ] Mention persistence and status tracking

**Exit Criteria**: Mention monitoring functional, AI suggestions working (if using OpenAI), replies can be reviewed and sent via CLI

---

### Task 0.4: Automated Cron Jobs Setup

**Owner**: Technical Lead (Frank)
**Effort**: 2-3 hours
**Priority**: MEDIUM - Enables scheduling
**Dependencies**: Tasks 0.1, 0.2, 0.3 complete

#### Create Cron Job Runner

**File**: `.twitter-automation/cron/cron-jobs.js`

```javascript
const cron = require('node-cron');
const ThreadScheduler = require('../scheduler/thread-scheduler');
const MentionMonitor = require('../monitoring/mention-monitor');

console.log('🤖 Starting Twitter automation cron jobs...\n');

// Process scheduled threads every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  console.log(`[${new Date().toISOString()}] ⏰ Processing scheduled threads...`);

  const schedulerAgentii = new ThreadScheduler('agentii_ai');
  const schedulerFrank = new ThreadScheduler('frank_agentii');

  await schedulerAgentii.processQueue();
  await schedulerFrank.processQueue();
});

// Check for new mentions every 15 minutes
cron.schedule('*/15 * * * *', async () => {
  console.log(`[${new Date().toISOString()}] 📬 Checking for new mentions...`);

  const monitorAgentii = new MentionMonitor('agentii_ai');
  const monitorFrank = new MentionMonitor('frank_agentii');

  await monitorAgentii.fetchNewMentions();
  await monitorFrank.fetchNewMentions();
});

console.log('✅ Cron jobs scheduled:');
console.log('  - Thread processing: Every 5 minutes');
console.log('  - Mention checking: Every 15 minutes\n');
console.log('Press Ctrl+C to stop.\n');
```

**Run as background service**:

```bash
# Install PM2 for process management
npm install -g pm2

# Start cron jobs
pm2 start .twitter-automation/cron/cron-jobs.js --name twitter-automation

# Check status
pm2 status

# View logs
pm2 logs twitter-automation

# Stop
pm2 stop twitter-automation
```

**Deliverables**:
- [ ] Cron job script for automated processing
- [ ] PM2 process management setup
- [ ] Every 5 min: Check and publish approved threads
- [ ] Every 15 min: Fetch new mentions for review

**Exit Criteria**: Cron jobs running in background via PM2, scheduled threads auto-publish, mentions auto-fetched

---

## Phase 1: Content Automation Workflows (Weeks 1-4)

### Task 1.6: Blog-to-Thread Automation for blog.agentii.ai (@agentii_ai)

**Owner**: Technical Lead (Frank)
**Effort**: 3-4 hours
**Priority**: HIGH
**Dependencies**: Task 0.2 complete (blog parser)

#### Workflow Overview

```
New blog post published → Parser extracts content → Generate thread → Save to queue → Human review → Schedule → Auto-publish
```

#### Step 1: Create Watcher Script for New Blog Posts

**File**: `.twitter-automation/watchers/blog-watcher.js`

```javascript
const chokidar = require('chokidar');
const path = require('path');
const BlogParser = require('../parsers/blog-parser');
const ThreadScheduler = require('../scheduler/thread-scheduler');

class BlogWatcher {
  constructor(blogDirectory, accountType) {
    this.blogDirectory = blogDirectory;
    this.accountType = accountType;
    this.parser = new BlogParser();
    this.scheduler = new ThreadScheduler(accountType);

    // Watch for new/modified MDX files
    this.watcher = chokidar.watch(`${blogDirectory}/**/*.mdx`, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true
    });

    this.setupWatcher();
  }

  setupWatcher() {
    this.watcher
      .on('add', filePath => this.onBlogAdded(filePath))
      .on('change', filePath => this.onBlogChanged(filePath));

    console.log(`👀 Watching ${this.blogDirectory} for new blog posts...`);
  }

  async onBlogAdded(filePath) {
    console.log(`\n📝 New blog post detected: ${path.basename(filePath)}`);
    await this.processBlog(filePath);
  }

  async onBlogChanged(filePath) {
    console.log(`\n✏️  Blog post updated: ${path.basename(filePath)}`);
    // Optionally re-process if thread hasn't been published yet
  }

  async processBlog(filePath) {
    try {
      // Parse blog post
      const blogData = this.parser.parseBlogPost(filePath);

      console.log(`📊 Generated ${blogData.threadSuggestions.length}-tweet thread`);
      console.log(`Title: ${blogData.frontMatter.title}`);

      // Calculate optimal posting time (next Tuesday or Thursday at 8 AM ET)
      const scheduledTime = this.getNextOptimalTime();

      // Add to queue for review
      this.scheduler.scheduleThread(
        blogData.threadSuggestions,
        scheduledTime,
        {
          blogPost: filePath,
          title: blogData.frontMatter.title,
          url: blogData.frontMatter.url || ''
        }
      );

      console.log(`✅ Thread queued for ${scheduledTime.toLocaleString()}`);
      console.log(`Run 'npm run review:threads' to approve before publishing\n`);

    } catch (error) {
      console.error('❌ Error processing blog:', error);
    }
  }

  getNextOptimalTime() {
    const now = new Date();
    const dayOfWeek = now.getDay();

    // Tuesday = 2, Thursday = 4
    const daysUntilTuesday = (2 - dayOfWeek + 7) % 7 || 7;
    const daysUntilThursday = (4 - dayOfWeek + 7) % 7 || 7;

    // Choose whichever is sooner
    const daysToAdd = Math.min(daysUntilTuesday, daysUntilThursday);

    const scheduledDate = new Date(now);
    scheduledDate.setDate(now.getDate() + daysToAdd);
    scheduledDate.setHours(8, 0, 0, 0); // 8:00 AM

    // Adjust to ET timezone (UTC-5 or UTC-4 depending on DST)
    // For simplicity, using UTC-5
    scheduledDate.setHours(scheduledDate.getHours() - 5);

    return scheduledDate;
  }
}

// Watch blog.agentii.ai
const agentiiBlogWatcher = new BlogWatcher(
  '/Users/frank/X/agentii-kit/blog.agentii.ai/pages',
  'agentii_ai'
);

// Watch kits.agentii.ai
const kitsBlogWatcher = new BlogWatcher(
  '/Users/frank/X/agentii-kit/kits.agentii.ai/pages',
  'frank_agentii'
);

console.log('\n✅ Blog watchers started for both blogs');
console.log('Publish a new blog post to automatically generate thread!\n');
```

**Install dependencies**:
```bash
npm install chokidar
```

**Usage**:
```bash
# Start watcher in background
pm2 start .twitter-automation/watchers/blog-watcher.js --name blog-watcher

# Check logs
pm2 logs blog-watcher
```

**Deliverables**:
- [ ] Blog watcher monitoring new .mdx files
- [ ] Auto-generate thread on new blog publish
- [ ] Auto-schedule for next Tuesday/Thursday 8 AM ET
- [ ] Queue thread for human review

#### Step 2: Manual Workflow for Existing Blog Posts

**File**: `.twitter-automation/scripts/convert-blog-to-thread.js`

```javascript
const BlogParser = require('../parsers/blog-parser');
const ThreadScheduler = require('../scheduler/thread-scheduler');

async function convertBlogToThread(blogFilePath, accountType, scheduledTime) {
  const parser = new BlogParser();
  const scheduler = new ThreadScheduler(accountType);

  // Parse blog
  const blogData = parser.parseBlogPost(blogFilePath);

  console.log(`\n📝 Converting blog to thread:`);
  console.log(`Title: ${blogData.frontMatter.title}`);
  console.log(`Tweets: ${blogData.threadSuggestions.length}\n`);

  // Preview thread
  blogData.threadSuggestions.forEach((tweet, index) => {
    console.log(`Tweet ${index + 1}/${blogData.threadSuggestions.length}:`);
    console.log(tweet.text);
    console.log(`(${tweet.text.length} chars)\n`);
  });

  // Schedule
  const scheduled = scheduler.scheduleThread(
    blogData.threadSuggestions,
    new Date(scheduledTime),
    {
      blogPost: blogFilePath,
      title: blogData.frontMatter.title
    }
  );

  console.log(`✅ Thread scheduled for ${scheduledTime}`);
  console.log(`Thread ID: ${scheduled.id}`);
  console.log(`Run 'npm run review:threads' to approve\n`);
}

// Usage: node scripts/convert-blog-to-thread.js <path> <account> <datetime>
const [blogPath, account, datetime] = process.argv.slice(2);

if (!blogPath || !account || !datetime) {
  console.log('Usage: node convert-blog-to-thread.js <blog-path> <agentii_ai|frank_agentii> <YYYY-MM-DD HH:MM>');
  process.exit(1);
}

convertBlogToThread(blogPath, account, datetime);
```

**Usage**:
```bash
# Convert existing blog post to thread
node scripts/convert-blog-to-thread.js \
  /Users/frank/X/agentii-kit/blog.agentii.ai/pages/analysis/tsla-earnings-q4.mdx \
  agentii_ai \
  "2025-12-10 08:00"
```

**Deliverables**:
- [ ] CLI script for manual blog-to-thread conversion
- [ ] Preview thread before scheduling
- [ ] Schedule for specific date/time

**Exit Criteria**: Blog posts automatically generate threads when published, threads queue for human review before posting

---

### Task 1.7: SEO-Driven Content Promotion Automation

**Owner**: Technical Lead (Frank)
**Effort**: 4-5 hours
**Priority**: MEDIUM
**Dependencies**: Task 0.2, Task 1.6 complete

#### Step 1: Integrate with Google Search Console API

**Goal**: Automatically promote blog posts that start ranking well in search

**File**: `.twitter-automation/seo/gsc-monitor.js`

```javascript
const { google } = require('googleapis');
const ThreadScheduler = require('../scheduler/thread-scheduler');

class GSCMonitor {
  constructor() {
    // Set up Google Search Console API auth
    this.auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });

    this.searchconsole = google.searchconsole({
      version: 'v1',
      auth: this.auth
    });
  }

  /**
   * Find blog posts with increasing impressions/clicks
   */
  async findTrendingPosts(siteUrl, days = 7) {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const response = await this.searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        dimensions: ['page'],
        rowLimit: 100
      }
    });

    const rows = response.data.rows || [];

    // Filter for blog posts with >100 impressions
    const trendingPosts = rows
      .filter(row => row.impressions > 100 && row.keys[0].includes('/blog/'))
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 10);

    return trendingPosts;
  }

  /**
   * Auto-promote trending blog posts on Twitter
   */
  async autoPromoteTrending(siteUrl, accountType) {
    const trending = await this.findTrendingPosts(siteUrl);
    const scheduler = new ThreadScheduler(accountType);

    trending.forEach(post => {
      console.log(`📈 Trending: ${post.keys[0]}`);
      console.log(`   Impressions: ${post.impressions}, Clicks: ${post.clicks}, CTR: ${(post.ctr * 100).toFixed(2)}%`);

      // Generate simple promotion tweet
      const promotionTweet = this.generatePromotionTweet(post.keys[0], accountType);

      // Schedule for tomorrow at optimal time
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(12, 0, 0, 0); // 12 PM ET

      scheduler.scheduleThread(
        [{ text: promotionTweet, type: 'promotion' }],
        tomorrow,
        { source: 'gsc_trending', url: post.keys[0] }
      );
    });

    console.log(`\n✅ Queued ${trending.length} trending posts for promotion`);
  }

  generatePromotionTweet(url, accountType) {
    const title = url.split('/').pop().replace(/-/g, ' ');

    if (accountType === 'agentii_ai') {
      return `This analysis is getting a lot of attention 📊\n\n"${title}"\n\n${url}\n\nFull breakdown with data and insights 👆`;
    } else {
      return `This guide is trending 🔥\n\n"${title}"\n\n${url}\n\nStep-by-step implementation details inside 👆`;
    }
  }
}

module.exports = GSCMonitor;
```

**Setup**:
1. Enable Google Search Console API
2. Create service account and download key JSON
3. Add `GOOGLE_SERVICE_ACCOUNT_KEY` to `.env`

**Deliverables**:
- [ ] GSC API integration for tracking trending posts
- [ ] Auto-promotion of posts with >100 impressions
- [ ] Schedule promotion tweets for trending content

**Exit Criteria**: Trending blog posts automatically queued for Twitter promotion, SEO-Twitter feedback loop established

---

## Phase 2: Engagement Automation (Weeks 5-8)

### Task 2.6: Smart Engagement Target Finder

**Owner**: Technical Lead (Frank)
**Effort**: 5-6 hours
**Priority**: HIGH
**Dependencies**: Task 0.1 complete

#### Step 1: Create Influencer Finder

**File**: `.twitter-automation/engagement/influencer-finder.js`

```javascript
const { TwitterApi } = require('twitter-api-v2');

class InfluencerFinder {
  constructor(accountType) {
    const credentials = accountType === 'agentii_ai' ? {
      appKey: process.env.AGENTII_AI_API_KEY,
      appSecret: process.env.AGENTII_AI_API_SECRET,
      accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
      accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
    } : {
      appKey: process.env.FRANK_AGENTII_API_KEY,
      appSecret: process.env.FRANK_AGENTII_API_SECRET,
      accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
      accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
    };

    this.client = new TwitterApi(credentials);
    this.accountType = accountType;
  }

  /**
   * Find accounts in your niche with good engagement
   */
  async findTargetAccounts(keywords, minFollowers = 5000, maxFollowers = 50000) {
    const targets = [];

    for (const keyword of keywords) {
      console.log(`🔍 Searching for: ${keyword}`);

      // Search for users tweeting about this keyword
      const tweets = await this.client.v2.search(keyword, {
        max_results: 100,
        'tweet.fields': ['author_id', 'public_metrics'],
        'user.fields': ['username', 'public_metrics', 'description']
      });

      for await (const tweet of tweets) {
        if (!tweet.author) continue;

        const followerCount = tweet.author.public_metrics.followers_count;

        // Filter by follower count (sweet spot: 5K-50K)
        if (followerCount >= minFollowers && followerCount <= maxFollowers) {
          // Calculate engagement rate
          const engagementRate = this.calculateEngagementRate(tweet);

          if (engagementRate > 0.02) { // >2% engagement
            targets.push({
              username: tweet.author.username,
              name: tweet.author.name,
              followers: followerCount,
              bio: tweet.author.description,
              engagementRate: engagementRate,
              recentTweet: tweet.text
            });
          }
        }
      }
    }

    // Remove duplicates
    const unique = targets.filter((target, index, self) =>
      index === self.findIndex(t => t.username === target.username)
    );

    // Sort by engagement rate
    unique.sort((a, b) => b.engagementRate - a.engagementRate);

    return unique.slice(0, 50); // Top 50
  }

  calculateEngagementRate(tweet) {
    const metrics = tweet.public_metrics;
    const totalEngagement = metrics.like_count + metrics.reply_count + metrics.retweet_count;

    // Estimate: assume tweet reached 10% of followers
    const estimatedImpressions = tweet.author.public_metrics.followers_count * 0.1;

    return totalEngagement / estimatedImpressions;
  }

  /**
   * Save target list to file
   */
  saveTargets(targets, filename) {
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, `../data/${filename}.json`);
    fs.writeFileSync(filePath, JSON.stringify(targets, null, 2));

    console.log(`✅ Saved ${targets.length} targets to ${filename}.json`);
  }
}

module.exports = InfluencerFinder;
```

**Usage Script** (`.twitter-automation/scripts/find-targets.js`):

```javascript
const InfluencerFinder = require('../engagement/influencer-finder');

async function findTargets() {
  // For @agentii_ai
  const finderAgentii = new InfluencerFinder('agentii_ai');
  const financeTargets = await finderAgentii.findTargetAccounts([
    'financial analysis',
    'investment research',
    'stock market',
    'earnings analysis',
    'fundamental analysis'
  ], 5000, 50000);

  finderAgentii.saveTargets(financeTargets, 'agentii_ai_targets');

  // For @frank_agentii
  const finderFrank = new InfluencerFinder('frank_agentii');
  const devTargets = await finderFrank.findTargetAccounts([
    'agentic AI',
    'LLM agents',
    'building with AI',
    'startup growth',
    'spec-driven development'
  ], 5000, 50000);

  finderFrank.saveTargets(devTargets, 'frank_agentii_targets');

  console.log('\n✅ Target discovery complete!');
}

findTargets();
```

**Run**:
```bash
node scripts/find-targets.js
```

**Deliverables**:
- [ ] InfluencerFinder class for discovering engagement targets
- [ ] Filter by follower count (5K-50K sweet spot)
- [ ] Calculate engagement rate per account
- [ ] Save curated target lists to JSON
- [ ] Separate lists for @agentii_ai and @frank_agentii

**Exit Criteria**: Generated target lists with 50+ high-quality accounts per niche, engagement rates calculated, ready for systematic engagement

---

### Task 2.7: Daily Engagement Suggestions Dashboard

**Owner**: Technical Lead (Frank)
**Effort**: 4-5 hours
**Priority**: MEDIUM
**Dependencies**: Task 2.6 complete

#### Create Engagement Dashboard

**File**: `.twitter-automation/cli/engagement-dashboard.js`

```javascript
const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
const path = require('path');

class EngagementDashboard {
  constructor(accountType) {
    this.accountType = accountType;
    this.targetsFile = path.join(__dirname, `../data/${accountType}_targets.json`);

    const credentials = accountType === 'agentii_ai' ? {
      appKey: process.env.AGENTII_AI_API_KEY,
      appSecret: process.env.AGENTII_AI_API_SECRET,
      accessToken: process.env.AGENTII_AI_ACCESS_TOKEN,
      accessSecret: process.env.AGENTII_AI_ACCESS_SECRET,
    } : {
      appKey: process.env.FRANK_AGENTII_API_KEY,
      appSecret: process.env.FRANK_AGENTII_API_SECRET,
      accessToken: process.env.FRANK_AGENTII_ACCESS_TOKEN,
      accessSecret: process.env.FRANK_AGENTII_ACCESS_SECRET,
    };

    this.client = new TwitterApi(credentials);
  }

  async getDailyEngagementSuggestions(count = 25) {
    // Load target list
    const targets = JSON.parse(fs.readFileSync(this.targetsFile, 'utf-8'));

    // Randomly select subset for today
    const todaysTargets = this.shuffleArray(targets).slice(0, count);

    console.log(`\n=== ENGAGEMENT DASHBOARD for @${this.accountType} ===\n`);
    console.log(`📋 Today's engagement targets: ${todaysTargets.length}\n`);

    const suggestions = [];

    for (const target of todaysTargets) {
      // Get their latest tweet
      const timeline = await this.client.v2.userTimeline(target.username, {
        max_results: 5,
        'tweet.fields': ['created_at', 'public_metrics']
      });

      const tweets = [];
      for await (const tweet of timeline) {
        tweets.push(tweet);
      }

      if (tweets.length > 0) {
        const latestTweet = tweets[0];

        suggestions.push({
          target: target,
          tweet: latestTweet,
          suggestedReply: this.generateReplySuggestion(latestTweet, target)
        });
      }
    }

    this.displaySuggestions(suggestions);

    return suggestions;
  }

  generateReplySuggestion(tweet, target) {
    // Simple rule-based suggestions
    const tweetLower = tweet.text.toLowerCase();

    if (tweetLower.includes('question') || tweetLower.includes('?')) {
      return '💡 Answer their question with specific data or example';
    } else if (tweetLower.includes('problem') || tweetLower.includes('struggle')) {
      return '💡 Share how you solved a similar problem';
    } else if (tweetLower.includes('launch') || tweetLower.includes('shipped')) {
      return '💡 Congratulate and ask about their approach';
    } else {
      return '💡 Add unique perspective or data point';
    }
  }

  displaySuggestions(suggestions) {
    suggestions.forEach((suggestion, index) => {
      console.log(`\n--- Suggestion ${index + 1}/${suggestions.length} ---`);
      console.log(`👤 @${suggestion.target.username} (${suggestion.target.followers} followers)`);
      console.log(`📊 Engagement rate: ${(suggestion.target.engagementRate * 100).toFixed(2)}%`);
      console.log(`\n📝 Latest tweet:`);
      console.log(`"${suggestion.tweet.text}"`);
      console.log(`\n${suggestion.suggestedReply}`);
      console.log(`\n🔗 https://twitter.com/${suggestion.target.username}/status/${suggestion.tweet.id}`);
    });

    console.log(`\n\n✅ Go engage with these ${suggestions.length} accounts!`);
    console.log(`Target: 25 quality replies today\n`);
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// Run dashboard
async function runDashboard() {
  const accountType = process.argv[2] || 'agentii_ai';
  const dashboard = new EngagementDashboard(accountType);

  await dashboard.getDailyEngagementSuggestions(25);
}

runDashboard();
```

**Usage**:
```bash
# Get daily engagement suggestions for @agentii_ai
node cli/engagement-dashboard.js agentii_ai

# For @frank_agentii
node cli/engagement-dashboard.js frank_agentii
```

**Deliverables**:
- [ ] Daily engagement dashboard with 25 suggestions
- [ ] Fetch latest tweets from target accounts
- [ ] Rule-based reply suggestions
- [ ] Direct links to tweets for easy engagement
- [ ] Randomize targets daily for variety

**Exit Criteria**: Dashboard generates 25 daily engagement suggestions per account, links to tweets, provides reply guidance

---

## Summary: Complete Automation Stack

### What Gets Automated

✅ **Content Publishing**:
- Blog posts → Auto-generate threads → Queue for review → Schedule → Auto-publish
- Trending blog posts (via GSC) → Auto-promote on Twitter
- Scheduled threads published at exact time via cron

✅ **Engagement Monitoring**:
- Mentions auto-fetched every 15 minutes
- Conversation context retrieved
- AI-suggested replies generated (optional)
- Queue for human review and approval

✅ **Target Discovery**:
- Auto-find influencers in your niche (5K-50K followers)
- Calculate engagement rates
- Generate daily engagement suggestions (25 accounts/day)

✅ **Analytics & Tracking**:
- Mention persistence and status tracking
- Thread queue management
- Publish success/failure logging

### What Requires Human Review

🙋 **Human-in-the-Loop** (required for authenticity and compliance):
- Approve threads before publishing (`npm run review:threads`)
- Approve replies before sending (`npm run review:replies`)
- Write custom content when AI suggestions aren't right
- Make strategic decisions (which blogs to promote, which accounts to engage)

### Daily Workflow

**Morning (15 minutes)**:
```bash
# 1. Review and approve pending threads
npm run review:threads

# 2. Check engagement dashboard
npm run engagement:dashboard agentii_ai
npm run engagement:dashboard frank_agentii

# 3. Review pending mentions/replies
npm run review:replies
```

**During Day (30-45 minutes)**:
- Engage with 25 suggested accounts (from dashboard)
- Write custom replies as needed
- Respond to new mentions

**Evening (10 minutes)**:
- Review what was published
- Check analytics
- Plan next day's content

### NPM Scripts Setup

Add to `package.json`:

```json
{
  "scripts": {
    "review:threads": "node .twitter-automation/cli/review-threads.js",
    "review:replies": "node .twitter-automation/cli/review-replies.js",
    "engagement:dashboard": "node .twitter-automation/cli/engagement-dashboard.js",
    "convert:blog": "node .twitter-automation/scripts/convert-blog-to-thread.js",
    "find:targets": "node .twitter-automation/scripts/find-targets.js",
    "start:automation": "pm2 start .twitter-automation/cron/cron-jobs.js --name twitter-automation",
    "start:watcher": "pm2 start .twitter-automation/watchers/blog-watcher.js --name blog-watcher",
    "stop:automation": "pm2 stop twitter-automation blog-watcher",
    "logs:automation": "pm2 logs"
  }
}
```

---

## Complete Installation & Setup Checklist

- [ ] Task 0.1: Twitter API access obtained, credentials in `.env`
- [ ] Task 0.2: Blog parser and thread scheduler implemented
- [ ] Task 0.3: Mention monitor and reply drafter implemented
- [ ] Task 0.4: Cron jobs configured with PM2
- [ ] Task 1.6: Blog watcher monitoring for auto-thread generation
- [ ] Task 1.7: Google Search Console integration (optional)
- [ ] Task 2.6: Influencer finder and target lists generated
- [ ] Task 2.7: Engagement dashboard functional
- [ ] All NPM scripts added to `package.json`
- [ ] PM2 services running (`npm run start:automation` and `npm run start:watcher`)
- [ ] Daily workflow tested end-to-end

---

**Next Steps**: This automation infrastructure runs alongside your manual tasks from `tasks_details.md`. Use automation to scale efficiency while maintaining authenticity through human review.
