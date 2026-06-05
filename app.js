// ─── QUESTIONS DATA ───────────────────────────────────────────────────────────
const QUESTIONS = [
  { q: "If you had an invisible animal that only you could see, what would it look like and what would it eat?", insight: "This reveals your child's inner world of imagination and control — a safe way to talk about what makes them feel powerful or comforted.", tag: "imagination" },
  { q: "What is the best smell in the whole world?", insight: "Sensory memory opens emotional doors. You'll learn what \"home\" smells like to them.", tag: "memory" },
  { q: "When was the last time you felt truly brave?", insight: "Children often don't recognize their own courage. This names it.", tag: "identity" },
  { q: "If you could ask me any question and I had to promise to answer honestly, what would it be?", insight: "This builds radical trust — and might terrify you. Accept it.", tag: "connection" },
  { q: "What sound makes you feel safe?", insight: "You may hear \"your footsteps on the stairs\" and your heart will crack open.", tag: "emotions" },
  { q: "Who in your life makes you laugh the hardest?", insight: "Joy reveals connection. Don't be hurt if it's not you — celebrate it.", tag: "connection" },
  { q: "If you could change one rule in our family, what would it be?", insight: "This is a golden key to their sense of agency. Listen, don't argue.", tag: "connection" },
  { q: "What's a memory you wish you could keep forever exactly as it is?", insight: "You'll discover what moments truly land for them, and they're rarely the big productions.", tag: "memory" },
  { q: "What do you think I was like when I was your age?", insight: "This flips the lens and lets them imagine you as a real person.", tag: "connection" },
  { q: "If your heart had a color today, what would it be?", insight: "Emotional vocabulary without pressure. \"Gray\" means something. \"Rainbow stripes\" does too.", tag: "emotions" },
  { q: "What's something you know how to do that you think I don't know how to do?", insight: "Pride and connection — they get to teach you.", tag: "identity" },
  { q: "What is the kindest thing a friend has ever done for you?", insight: "Shapes their definition of friendship and gratitude.", tag: "connection" },
  { q: "If our car could fly, where would you make it take us?", insight: "Pure wonder. No limits.", tag: "wonder" },
  { q: "What do you think your dreams are trying to tell you?", insight: "Open-ended. Even young children can riff on this.", tag: "wonder" },
  { q: "What's the hardest thing about being your age right now?", insight: "A pressure-release valve. You may hear about things you didn't know were heavy.", tag: "emotions" },
  { q: "If you could build a secret room that no one else could enter, what would be inside?", insight: "Reveals their true loves, their private self, their need for a boundary.", tag: "imagination" },
  { q: "What do you think love feels like in your body?", insight: "Emotional embodiment. A child once said, \"Like warm toast in my stomach.\"", tag: "emotions" },
  { q: "What's a question you've always wanted to ask a grown-up but haven't?", insight: "The door to conversations you didn't know they needed.", tag: "connection" },
  { q: "If you could give every person in the world one gift, what would it be?", insight: "Values disguised as magic.", tag: "wonder" },
  { q: "What do you wish we did more of as a family?", insight: "Tiny, actionable truth. Follow through.", tag: "connection" },
  { q: "What's the most beautiful thing you saw today?", insight: "Trains their eye to notice, and tells you their aesthetic.", tag: "wonder" },
  { q: "When was a time you felt misunderstood?", insight: "Painful but crucial. Let them speak it without defense.", tag: "emotions" },
  { q: "If your future self could send you a postcard, what would it say?", insight: "Hope, fear, identity — all in one.", tag: "identity" },
  { q: "What song makes you feel like you could do anything?", insight: "You might play it together after. Instant ritual.", tag: "identity" },
  { q: "What do you think our house says about our family to someone who walks in?", insight: "Perception and belonging.", tag: "memory" },
  { q: "If you could keep a jar of any feeling and open it whenever you wanted, which feeling would you choose?", insight: "Emotional regulation + poetry.", tag: "emotions" },
  { q: "What's something you're proud of that no one ever mentions?", insight: "Hidden achievements. Celebrate it on the spot.", tag: "identity" },
  { q: "What do you think the moon is doing right now?", insight: "Dream logic. Join it.", tag: "wonder" },
  { q: "If you could invent a holiday, what would it celebrate and how would we do it?", insight: "Family culture creation. You might actually start it.", tag: "imagination" },
  { q: "What's a word that feels like a hug?", insight: "Language meets comfort. Their answer will stick with you.", tag: "emotions" },
  { q: "When do you feel most like yourself?", insight: "Identity becomes conscious.", tag: "identity" },
  { q: "What do you think I worry about?", insight: "They know more than we think. Breathe through the answer.", tag: "connection" },
  { q: "If a story was written about our family, what would the title be?", insight: "Narrative identity.", tag: "memory" },
  { q: "What's something you'd like to learn that no one has taught you yet?", insight: "Curiosity and permission to ask.", tag: "identity" },
  { q: "If you could make it rain anything other than water, what would it rain?", insight: "Playfulness. \"Pancakes\" is a valid answer.", tag: "wonder" },
  { q: "What is a time you felt really seen?", insight: "You'll learn how your child receives love.", tag: "emotions" },
  { q: "What do you think your superpower is?", insight: "They have one. They need to know you see it too.", tag: "identity" },
  { q: "What's the best piece of advice you've ever gotten?", insight: "Maybe from a grandparent, a coach, or a cartoon. Honor it.", tag: "memory" },
  { q: "If you could send one message to every kid your age, what would it be?", insight: "Empathy and wisdom.", tag: "wonder" },
  { q: "What do you think happens in our house after everyone goes to sleep?", insight: "Magic, fear, or family lore.", tag: "imagination" },
  { q: "What's something about you that you think I don't notice?", insight: "Brave question. Receive the gift gently.", tag: "connection" },
  { q: "If you could freeze time for one hour, what would you do?", insight: "Desire unbound by consequence.", tag: "imagination" },
  { q: "What does forgiveness feel like to you?", insight: "Hard but vital emotional intelligence.", tag: "emotions" },
  { q: "If you could create a new flavor, what would it taste like and what would you call it?", insight: "Creativity and sensory play.", tag: "imagination" },
  { q: "What's a rule you think adults should have to follow?", insight: "Justice and humor.", tag: "connection" },
  { q: "Who is a person you think about even though you don't see them often?", insight: "Unseen bonds of love.", tag: "memory" },
  { q: "What would be the perfect day from start to finish?", insight: "Their values mapped onto time.", tag: "identity" },
  { q: "What's the bravest thing you've ever seen someone else do?", insight: "Observation of courage.", tag: "memory" },
  { q: "If you could write a letter to your future self, what's the one thing you'd want to remember?", insight: "Legacy of self.", tag: "identity" },
  { q: "What's a \"goodbye\" you still think about?", insight: "Grief and memory. Only ask when you're ready to hold whatever comes.", tag: "emotions" },
  { q: "What do you hope never changes about our family?", insight: "Security and love verbalized.", tag: "connection" },
  { q: "What's a question you wish I would ask you?", insight: "The ultimate key. Then ask it, and keep asking it.", tag: "connection" },
];

const TAG_LABELS = { imagination:"Imagination", identity:"Identity", emotions:"Emotions", connection:"Connection", memory:"Memory", wonder:"Wonder" };

// ─── ACTIVITIES DATA ──────────────────────────────────────────────────────────
const ACTIVITIES = [
  { title: "Cook Their Dream Dinner Together", why: "Agency and shared creation build a sense of partnership.", detail: "Let them design the menu — no matter how absurd — and cook it side by side. You're the sous-chef.", tag: "creative" },
  { title: "Build a Fort and Tell Stories Inside", why: "Enclosed spaces unlock vulnerability and collaborative imagination.", detail: "Blankets, pillows, fairy lights. Then tell a story together — you start, they continue, back and forth.", tag: "play" },
  { title: "Take a Night Walk with One Flashlight", why: "Darkness and movement lower defenses; deep truths emerge.", detail: "Walk the neighborhood at dusk. The flashlight beam becomes a portal to talk about things that daylight hides.", tag: "outdoor" },
  { title: "Write Letters to Each Other's Future Selves", why: "Time-binding acts teach that love transcends now.", detail: "Both write a letter to the other, to be opened in exactly one year. Seal them in envelopes, hide them somewhere sacred.", tag: "ritual" },
  { title: "Create a Secret Handshake", why: "Rituals of belonging. They'll remember it forever.", detail: "Not a one-time thing. Spend a whole afternoon designing a multi-part handshake that's ridiculously yours.", tag: "ritual" },
  { title: "Go Stargazing with No Agenda", why: "Awe shared between parent and child is a powerful glue.", detail: "Lie on a blanket, find constellations, or make up your own. The only goal is looking up together.", tag: "outdoor" },
  { title: "Make a Family Time Capsule", why: "Collective identity and hope across time.", detail: "Collect small objects, notes, a photo, a voice recording. Seal it in a box and bury it or hide it with a future open-date.", tag: "memory" },
  { title: "Volunteer Together for Something They Care About", why: "Values are caught, not taught — and shared service builds quiet pride.", detail: "Even just one hour at an animal shelter, a food bank, or cleaning a creek. Let them choose.", tag: "service" },
  { title: "Have a 'Yes Day' Where You Say Yes to Everything (Safe)", why: "Celebration of their autonomy inside a safe container.", detail: "Ice cream for breakfast? Yes. Pajamas in the park? Yes. They lead, you follow.", tag: "play" },
  { title: "Draw Portraits of Each Other", why: "Being seen — literally and emotionally — in one sitting.", detail: "Sit across from each other, pencils and paper, and really look. No artistic skill required. Then show each other.", tag: "creative" },
  { title: "Create a Soundtrack of Your Lives Together", why: "Sonic time travel into shared history.", detail: "Build a playlist where each of you picks songs that represent a memory. Listen to it in the car.", tag: "memory" },
  { title: "Write a Story Where They're the Hero", why: "Narrative ownership: their life as epic.", detail: "Sit side by side, you type, they dictate. Give them powers, a quest, and a moment where they save the day. Print it.", tag: "creative" },
  { title: "Go Cloudwatching and Find 10 Shapes", why: "Presence and imagination, zero structure.", detail: "Lie on the grass, find dragons, faces, islands. The only rule: no pointing out anything that's actually a cloud.", tag: "outdoor" },
  { title: "Hold a Parent-Child Interview", why: "Mutual curiosity. You are not a mystery; you're a person.", detail: "They get to interview you with any questions they want. Record it on your phone. Then switch.", tag: "ritual" },
  { title: "Build Something Simple Out of Wood", why: "Tangible shared accomplishment and the gift of imperfection.", detail: "A birdhouse, a tiny boat, a wobbly shelf. They hammer, you guide. Let the imperfections stay.", tag: "creative" },
  { title: "Do a Random Act of Kindness Together", why: "Kindness as shared adventure.", detail: "Choose it together: pay for someone's coffee, leave a note on a stranger's windshield, draw a chalk message.", tag: "service" },
  { title: "Teach Them Something You Love", why: "Legacy is not genetic; it's intentional.", detail: "A chord on the guitar, a magic trick, a recipe from your grandmother. Your passion, passed on.", tag: "ritual" },
  { title: "Let Them Teach You Something", why: "Power reversal builds respect and laughter.", detail: "A video game, a TikTok dance, how to build something in their favorite app. You're the clumsy student.", tag: "play" },
  { title: "Write a Letter to Someone You Both Miss", why: "Grief and love woven into shared ritual.", detail: "Light a candle, write or draw a message to a grandparent, a friend who moved, a pet. Decide together whether to send it.", tag: "ritual" },
  { title: "Have a Board Game Championship", why: "Play with structure, laughter with no stakes.", detail: "Over a weekend, play a series of games and keep a silly leaderboard. Winner gets a homemade trophy.", tag: "play" },
  { title: "Create a Family Mantra or Motto", why: "Articulated identity creates invisible strength.", detail: "Discuss what your little team believes in. Boil it down to a phrase. Paint it on a rock, frame it.", tag: "ritual" },
  { title: "Go on a Photo Safari", why: "Their inner world, framed and visible.", detail: "Each of you takes 10 photos of something that \"makes you feel something.\" Then compare and explain.", tag: "creative" },
  { title: "Plan and Execute a 'Celebrate Yourself' Day", why: "Radical affirmation: you are worthy of celebration, simply for being you.", detail: "One whole day devoted to celebrating them — their favorite foods, activities, and small surprise tributes.", tag: "ritual" },
  { title: "Have a Movie Night Where You Pause and Predict", why: "Joint storytelling and the thrill of being right (or hilariously wrong).", detail: "Halfway through, pause and both write down what you think happens next. Then keep watching.", tag: "play" },
  { title: "Make a Map of Your Life Together So Far", why: "Narrative geography: their story has a landscape.", detail: "On a big piece of paper, draw a winding road with landmarks: \"Day You Were Born,\" \"The Bee Sting Trip,\" \"First Rollercoaster.\" Add together.", tag: "memory" },
  { title: "Go on a Gratitude Walk", why: "Embodied gratitude, not recited.", detail: "Walk in silence for 5 minutes, then each share 5 things you noticed that you're grateful for.", tag: "outdoor" },
  { title: "Recreate Your Favorite Photo from When They Were Younger", why: "Time held tenderly; growth celebrated.", detail: "Find an old photo, dress similarly, strike the same pose, laugh at the years.", tag: "memory" },
  { title: "Do a Puzzle Over Several Days", why: "Shared quiet purpose and the metaphor of slow completion.", detail: "Keep it on a table, wander over together, find one piece each evening. No rush.", tag: "play" },
  { title: "Have a 'No Words' Hour", why: "Heightened awareness of non-verbal connection.", detail: "Spend one hour together communicating only through gestures, notes, and facial expressions.", tag: "play" },
  { title: "Write a Poem, One Line Each", why: "Co-creation without domination.", detail: "Start with a line about a feeling or a place. Pass the paper back and forth until the poem feels done. Read it aloud.", tag: "creative" },
  { title: "Hold a 'What If' Session", why: "Imagination as connection, not escape.", detail: "No limits: What if we lived on a spaceship? What if dogs could talk? What if bedtime was noon?", tag: "play" },
  { title: "Create a Legacy Jar", why: "Anticipation and accumulation of joy.", detail: "Write down small moments, jokes, achievements over a month and drop them in. Open on New Year's Eve.", tag: "ritual" },
  { title: "Go Back to a Place That Holds a Memory", why: "Anchoring identity in physical space.", detail: "The hospital where they were born, the park where they took first steps, the old apartment. Walk and tell the story.", tag: "memory" },
  { title: "Make a 'Rules of the World' List", why: "Reveals values and what they experience as constriction.", detail: "What rules would they invent if they were in charge? Bedtime at midnight? Chocolate vegetables? Write them down seriously.", tag: "creative" },
  { title: "Do a Trust Walk", why: "Vulnerable dependence builds deep trust.", detail: "Blindfold them (or you), guide each other through the house or garden using only gentle words. Switch roles.", tag: "play" },
  { title: "Create a Handprint or Footprint Cast Together", why: "Physical evidence of \"we were here, together, at this size.\"", detail: "Plaster or clay, side by side. Paint them, date them, display them.", tag: "memory" },
  { title: "Take Them on a 'Mystery Date'", why: "Curated delight and the thrill of being led by someone who knows you.", detail: "Plan an outing but give zero details. Every step is a surprise: a bakery, a kite field, a used bookstore.", tag: "ritual" },
  { title: "Listen to an Old Radio Show or Podcast and Discuss", why: "Cross-generational empathy and active listening.", detail: "Find a story from before they were born. Pause and ask: \"What would you do?\"", tag: "play" },
  { title: "Make a 'Strengths Shield' or Coat of Arms", why: "Naming strengths aloud carves them into identity.", detail: "Draw a shield. In each section, write a strength you see in them. They draw one for you too.", tag: "creative" },
  { title: "Do a 'Sit in Silence and Notice' Outside", why: "Shared stillness as a love language.", detail: "Pick a spot in nature. Sit for 5 minutes silently. Then whisper what you heard, saw, smelled.", tag: "outdoor" },
  { title: "Create a 'Best Moments' Box", why: "A tactile antidote to future discouragement.", detail: "Decorate a shoebox. Whenever something great happens, write it on a slip and drop it in. Read them on tough days.", tag: "ritual" },
  { title: "Choreograph a Silly Dance to Their Favorite Song", why: "Embodied joy and the freedom of looking foolish together.", detail: "No talent required. Create 3 ridiculous moves, name them, perform them together until you collapse laughing.", tag: "play" },
  { title: "Trace Each Other's Silhouette", why: "A physical portrait of love and perception.", detail: "Tape paper to the wall, cast a shadow, trace it, then fill in the outline with words that describe the other.", tag: "creative" },
  { title: "Have an 'Inside Joke' Creation Day", why: "Belonging forged in exclusive, shared absurdity.", detail: "Actively try to make a new inside joke. Do something silly, give it a name, repeat it.", tag: "play" },
  { title: "Plan a Future Trip Together (Even If Years Away)", why: "Hope and anticipation as shared emotional fuel.", detail: "Get maps, guidebooks, draw the route, decide what you'll eat there. Make it real enough to taste.", tag: "ritual" },
  { title: "Make a 'Gratitude for You' Journal", why: "A deep dive into being seen and valued.", detail: "Each of you gets a small notebook. For one month, write one thing you appreciate about the other every night. Then swap and read.", tag: "ritual" },
  { title: "Design and Build a Miniature World", why: "World-building is relationship-building.", detail: "A garden terrarium, a tiny village from craft supplies, a Lego universe with a backstory you invent together.", tag: "creative" },
  { title: "Record a Podcast Episode Together", why: "Their voice preserved, their thoughts taken seriously.", detail: "Just your phone on voice memo. Pick a topic: \"Review of Our Day,\" \"Best Animals,\" \"Things Adults Don't Get.\"", tag: "creative" },
  { title: "Have a 'Reverse Role' Dinner", why: "Perspective-taking through play.", detail: "They sit in your chair, you in theirs. They serve the food (with help), they ask the \"parent\" questions.", tag: "play" },
  { title: "Go on a 'Nostalgia Trip' Through Old Photos", why: "Narrating their origin story builds coherence and belonging.", detail: "Curl up and scroll through baby photos or print albums. Tell the stories behind each one.", tag: "memory" },
  { title: "Plan and Execute a 'Thank-You' Ritual for Someone", why: "Active gratitude that extends the circle of connection.", detail: "Choose a person who's helped them (teacher, coach, grandparent). Together, make something, deliver it.", tag: "service" },
  { title: "Create a Time-Lapse of an Ordinary Day", why: "The mundane becomes sacred through attention.", detail: "Set a phone to take one photo every hour of something you're doing together. At the end, flick through the day.", tag: "creative" },
];

const ACTIVITY_TAG_LABELS = { creative:"Creative", outdoor:"Outdoor", ritual:"Ritual", service:"Service", play:"Play", memory:"Memory" };
const EMOJIS = ['🌟','🦋','🌈','🌿','🦁','🐬','🦊','🌸','🍀','🌺','🦄','🐻','🌙','☀️','🦜','🐧','🌻','🎈','🌊','🦅','🐝','🎀','🦒','🐙'];

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = {
  members: [],
  answers: [],
  activityLogs: [],
  familyName: 'Our Family',
  familyId: null,
  inviteCode: null,
  setupDone: false,
  offlineMode: false,
};

let ui = {
  screen: 'home',
  activeTab: 'questions',
  qFilter: 'all',
  qSearch: '',
  aFilter: 'all',
  aSearch: '',
  journalMember: 'all',
  composeQIdx: null,
  composeMember: null,
  detailAnswerId: null,
  logActivityIdx: null,
  logMember: null,
  logPhotoFile: null,
  logPhotoUrl: null,
  detailLogId: null,
  editMemberId: null,
  selectedEmoji: '🌟',
  selectedPhotoFile: null,
  selectedPhotoUrl: null,
  authMode: 'signin',
};

let sb = null; // Supabase client
let currentUser = null;

// ─── STORAGE ──────────────────────────────────────────────────────────────────
function saveLocal() { localStorage.setItem('52q_state', JSON.stringify(state)); }
function loadLocal() {
  try { const r = localStorage.getItem('52q_state'); if (r) state = { ...state, ...JSON.parse(r) }; } catch(e){}
}

// ─── SUPABASE INIT ────────────────────────────────────────────────────────────
function initSupabase() {
  const url = localStorage.getItem('sb_url');
  const key = localStorage.getItem('sb_key');
  if (!url || !key) return false;
  try {
    sb = window.supabase.createClient(url, key);
    return true;
  } catch(e) { return false; }
}

function saveSupabaseConfig() {
  let url = document.getElementById('setup-url').value.trim().replace(/\/+$/, ''); // strip trailing slashes
  const key = document.getElementById('setup-key').value.trim();

  if (!url || !key) { alert('Please enter both the URL and key.'); return; }

  // Ensure URL has https:// prefix
  if (!url.startsWith('http')) url = 'https://' + url;

  // Basic format check
  if (!url.includes('.supabase.co')) {
    alert('That URL doesn\'t look right.\n\nIt should look like:\nhttps://abcdefgh.supabase.co\n\nFind it in Supabase → Project Settings → API.');
    return;
  }

  localStorage.setItem('sb_url', url);
  localStorage.setItem('sb_key', key);

  if (initSupabase()) {
    hide('setup-screen');
    show('auth-screen');
  } else {
    alert('Could not connect. Double-check your URL and anon key.');
  }
}

function resetSupabaseConfig() {
  localStorage.removeItem('sb_url');
  localStorage.removeItem('sb_key');
  sb = null;
  // Pre-fill the fields with current values so they can fix rather than re-type
  document.getElementById('setup-url').value = localStorage.getItem('sb_url') || '';
  document.getElementById('setup-key').value = localStorage.getItem('sb_key') || '';
  hide('auth-screen');
  show('setup-screen');
}

function useOfflineMode() {
  state.offlineMode = true;
  saveLocal();
  hide('setup-screen');
  if (!state.setupDone) showOnboarding();
  else { show('app'); render(); }
}

function showSetup() {
  hide('onboarding');
  show('setup-screen');
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
let authMode = 'signin';

function toggleAuthMode() {
  authMode = authMode === 'signin' ? 'signup' : 'signin';
  const isSignup = authMode === 'signup';
  document.getElementById('auth-title').textContent = isSignup ? 'Create your account' : 'Welcome back';
  document.getElementById('auth-sub').textContent = isSignup ? 'Start your family journal.' : 'Sign in to sync your family journal.';
  document.getElementById('auth-signup-fields').style.display = isSignup ? 'block' : 'none';
  document.getElementById('auth-submit-btn').textContent = isSignup ? 'Create Account' : 'Sign In';
  document.getElementById('auth-toggle-btn').textContent = isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up";
  document.getElementById('auth-error').style.display = 'none';
}

async function authSubmit() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  errEl.style.display = 'none';

  if (!email || !password) { showAuthError('Please fill in all fields.'); return; }

  const btn = document.getElementById('auth-submit-btn');
  btn.textContent = '…';
  btn.disabled = true;

  try {
    if (authMode === 'signup') {
      const familyName = document.getElementById('auth-family').value.trim() || 'Our Family';
      const { data, error } = await sb.auth.signUp({ email, password });
      if (error) throw error;
      currentUser = data.user;
      await createFamily(familyName);
    } else {
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      currentUser = data.user;
      await loadFromCloud();
    }
    hide('auth-screen');
    show('app');
    render();
  } catch(e) {
    showAuthError(e.message || 'Something went wrong. Try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = authMode === 'signup' ? 'Create Account' : 'Sign In';
  }
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg;
  el.style.display = 'block';
}

async function createFamily(name) {
  const { data: fam, error } = await sb.from('families').insert({ name }).select().single();
  if (error) throw error;
  state.familyId = fam.id;
  state.familyName = fam.name;
  state.inviteCode = fam.invite_code;
  await sb.from('user_families').insert({ user_id: currentUser.id, family_id: fam.id, role: 'owner' });
  state.setupDone = true;
  saveLocal();
}

async function loadFromCloud() {
  if (!sb || !currentUser) return;
  // Get family
  const { data: links } = await sb.from('user_families').select('family_id, families(*)').eq('user_id', currentUser.id);
  if (!links || links.length === 0) {
    // New user, no family yet — show onboarding
    hide('auth-screen');
    showOnboarding(true);
    return;
  }
  const fam = links[0].families;
  state.familyId = fam.id;
  state.familyName = fam.name;
  state.inviteCode = fam.invite_code;
  state.setupDone = true;

  // Load members
  const { data: members } = await sb.from('members').select('*').eq('family_id', fam.id);
  state.members = (members || []).map(m => ({ id: m.id, name: m.name, emoji: m.emoji, dob: m.dob }));

  // Load answers
  const { data: answers } = await sb.from('answers').select('*').eq('family_id', fam.id).order('answered_at', { ascending: false });
  state.answers = (answers || []).map(a => ({
    id: a.id, memberId: a.member_id, questionIdx: a.question_idx,
    answer: a.answer, date: a.answered_at, ageAtTime: a.age_at_time, photoUrl: a.photo_url,
  }));

  // Load activity logs
  const { data: logs } = await sb.from('activity_logs').select('*').eq('family_id', fam.id).order('logged_at', { ascending: false });
  state.activityLogs = (logs || []).map(l => ({
    id: l.id, memberId: l.member_id, activityIdx: l.activity_idx,
    notes: l.notes, date: l.logged_at, photoUrl: l.photo_url,
  }));
  saveLocal();
}

function openJoinSheet() { openSheet('join-sheet'); }

async function joinFamily() {
  const code = document.getElementById('join-code').value.trim().toLowerCase();
  if (!code) { alert('Please enter an invite code.'); return; }
  if (!sb || !currentUser) { alert('Sign in first.'); return; }

  const { data: fam, error } = await sb.from('families').select('*').eq('invite_code', code).single();
  if (error || !fam) { alert('Code not found. Check it and try again.'); return; }

  await sb.from('user_families').upsert({ user_id: currentUser.id, family_id: fam.id, role: 'member' });
  state.familyId = fam.id;
  state.familyName = fam.name;
  state.inviteCode = fam.invite_code;
  closeSheet();
  await loadFromCloud();
  hide('auth-screen');
  show('app');
  render();
}

function setSyncStatus(online) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  if (!sb) { el.textContent = '●  offline mode'; el.style.color = '#bbb'; return; }
  el.textContent = online ? '●  synced' : '●  syncing…';
  el.style.color = online ? '#5a9e6f' : '#e8a96a';
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
loadLocal();

(async () => {
  const hasConfig = initSupabase();

  if (hasConfig) {
    // Check existing session
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      currentUser = session.user;
      await loadFromCloud();
      setSyncStatus(true);
      hide('auth-screen'); hide('setup-screen'); hide('onboarding');
      show('app');
      render();
    } else {
      show('auth-screen');
    }
  } else if (state.offlineMode && state.setupDone) {
    show('app');
    render();
  } else if (state.offlineMode) {
    showOnboarding();
  } else {
    show('setup-screen');
  }
})();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

// ─── ONBOARDING ───────────────────────────────────────────────────────────────
function showOnboarding(cloudUser = false) {
  document.getElementById('onboarding').style.display = 'flex';
  if (cloudUser) {
    // Hide offline option — they already have an account
    document.querySelector('#onboarding .btn-ghost').style.display = 'none';
  }
}

function finishOnboarding() {
  const name = document.getElementById('ob-family').value.trim() || 'Our Family';
  state.familyName = name;
  state.offlineMode = !sb;
  state.setupDone = true;
  saveLocal();
  hide('onboarding');

  if (sb && currentUser) {
    createFamily(name).then(() => { show('app'); render(); });
  } else {
    show('app');
    render();
  }
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function render() {
  renderHome();
  renderQuestions();
  renderJournal();
  renderFamily();
}

function setScreen(name) {
  ui.screen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-screen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (name === 'journal') renderJournal();
  if (name === 'family') renderFamily();
  if (name === 'home') renderHome();
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function getWeekIdx() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.min(Math.floor((now - start) / (7*24*60*60*1000)), 51);
}

function renderHome() {
  const weekIdx = getWeekIdx();
  const wq = QUESTIONS[weekIdx];
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('home-greeting').textContent = greet + ',';
  document.getElementById('home-family').innerHTML = `<em>${state.familyName}</em> 💛`;
  document.getElementById('week-num').textContent = `Week ${weekIdx + 1} of 52`;
  document.getElementById('week-q').textContent = wq.q;

  // This week's activity
  const wa = ACTIVITIES[weekIdx];
  document.getElementById('activity-week-num').textContent = `🎯 Activity · Week ${weekIdx + 1}`;
  document.getElementById('activity-week-title').textContent = wa.title;

  // Members row
  const row = document.getElementById('home-members');
  row.innerHTML = '';
  state.members.forEach(m => {
    const d = document.createElement('div');
    d.className = 'member-chip';
    d.innerHTML = `<div class="avatar">${m.emoji}</div><div class="avatar-name">${m.name}</div>`;
    d.onclick = () => openCompose(weekIdx, m.id);
    row.appendChild(d);
  });
  const addC = document.createElement('div');
  addC.className = 'member-chip add-member-chip';
  addC.innerHTML = `<div class="avatar" style="border:2px dashed #ddd;color:#bbb">+</div><div class="avatar-name">Add</div>`;
  addC.onclick = openAddMember;
  row.appendChild(addC);

  // Recent — merge answers + activity logs
  const list = document.getElementById('home-recent');
  list.innerHTML = '';
  const recentAnswers = state.answers.map(a => ({ ...a, _type: 'answer' }));
  const recentLogs = state.activityLogs.map(l => ({ ...l, _type: 'activity' }));
  const recent = [...recentAnswers, ...recentLogs].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0,10);

  if (!recent.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📖</div><div class="empty-title">Your journal is empty</div><div class="empty-sub">Answer this week's question or log an activity to save your first memory.</div></div>`;
  } else {
    recent.forEach(entry => {
      const m = state.members.find(x => x.id === entry.memberId);
      if (!m) return;
      const c = document.createElement('div');
      c.className = 'recent-card';
      if (entry._type === 'answer') {
        const q = QUESTIONS[entry.questionIdx];
        c.innerHTML = `
          <div class="recent-meta">
            <div class="recent-avatar-sm">${m.emoji}</div>
            <span class="recent-who">${m.name}</span>
            <span class="recent-type-pill question-pill">Question</span>
            <span class="recent-when">${fmtDate(entry.date)}</span>
          </div>
          ${entry.photoUrl ? `<img src="${entry.photoUrl}" class="recent-photo" alt="" />` : ''}
          <div class="recent-q">"${q.q}"</div>
          <div class="recent-a">${escHtml(entry.answer)}</div>`;
        c.onclick = () => openDetail(entry.id);
      } else {
        const a = ACTIVITIES[entry.activityIdx];
        c.innerHTML = `
          <div class="recent-meta">
            <div class="recent-avatar-sm">${m.emoji}</div>
            <span class="recent-who">${m.name}</span>
            <span class="recent-type-pill activity-pill">Activity</span>
            <span class="recent-when">${fmtDate(entry.date)}</span>
          </div>
          ${entry.photoUrl ? `<img src="${entry.photoUrl}" class="recent-photo" alt="" />` : ''}
          <div class="recent-q">🎯 ${a.title}</div>
          ${entry.notes ? `<div class="recent-a">${escHtml(entry.notes)}</div>` : ''}`;
        c.onclick = () => openActivityDetail(entry.id);
      }
      list.appendChild(c);
    });
  }
}

// ─── QUESTIONS ────────────────────────────────────────────────────────────────
function renderQuestions() {
  const list = document.getElementById('q-list');
  list.innerHTML = '';
  const search = ui.qSearch.toLowerCase();
  QUESTIONS.forEach((q, i) => {
    if (ui.qFilter !== 'all' && q.tag !== ui.qFilter) return;
    if (search && !q.q.toLowerCase().includes(search)) return;
    const myAnswers = state.answers.filter(a => a.questionIdx === i);
    const answered = myAnswers.length > 0;
    const row = document.createElement('div');
    row.className = 'q-row' + (answered ? ' answered' : '');
    row.innerHTML = `
      <div class="q-num-badge">${i+1}</div>
      <div class="q-row-body">
        <div class="q-row-text">${q.q}</div>
        <div class="q-row-meta">
          <span class="q-tag-sm tag-${q.tag}">${TAG_LABELS[q.tag]}</span>
          ${answered ? `<span class="answered-dot"></span><span class="answered-count">${myAnswers.length} answer${myAnswers.length>1?'s':''}</span>` : ''}
        </div>
      </div>
      <div class="q-chevron">›</div>`;
    row.onclick = () => openCompose(i, null);
    list.appendChild(row);
  });
}

function setQFilter(tag, el) {
  ui.qFilter = tag;
  el.closest('.filter-chips').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderQuestions();
}

document.getElementById('q-search').addEventListener('input', e => {
  ui.qSearch = e.target.value;
  renderQuestions();
});

// ─── TAB SWITCHING ────────────────────────────────────────────────────────────
function showTab(tab) {
  ui.activeTab = tab;
  document.getElementById('panel-questions').style.display = tab === 'questions' ? 'flex' : 'none';
  document.getElementById('panel-questions').style.flexDirection = 'column';
  document.getElementById('panel-activities').style.display = tab === 'activities' ? 'flex' : 'none';
  document.getElementById('panel-activities').style.flexDirection = 'column';
  document.getElementById('tab-questions').classList.toggle('active', tab === 'questions');
  document.getElementById('tab-activities').classList.toggle('active', tab === 'activities');
  document.getElementById('explore-title').textContent = tab === 'questions' ? 'Questions' : 'Activities';
  if (tab === 'activities') renderActivities();
}

// ─── ACTIVITIES LIST ──────────────────────────────────────────────────────────
function renderActivities() {
  const list = document.getElementById('a-list');
  list.innerHTML = '';
  const search = ui.aSearch.toLowerCase();
  ACTIVITIES.forEach((a, i) => {
    if (ui.aFilter !== 'all' && a.tag !== ui.aFilter) return;
    if (search && !a.title.toLowerCase().includes(search) && !a.detail.toLowerCase().includes(search)) return;
    const myLogs = state.activityLogs.filter(l => l.activityIdx === i);
    const done = myLogs.length > 0;
    const row = document.createElement('div');
    row.className = 'q-row' + (done ? ' answered' : '');
    row.innerHTML = `
      <div class="q-num-badge">${done ? '✓' : i+1}</div>
      <div class="q-row-body">
        <div class="q-row-text">${a.title}</div>
        <div class="q-row-meta">
          <span class="q-tag-sm tag-act-${a.tag}">${ACTIVITY_TAG_LABELS[a.tag]}</span>
          ${done ? `<span class="answered-dot" style="background:#5a9e6f"></span><span class="answered-count">${myLogs.length}x done</span>` : ''}
        </div>
      </div>
      <div class="q-chevron">›</div>`;
    row.onclick = () => openActivityLog(i, null);
    list.appendChild(row);
  });
}

function setAFilter(tag, el) {
  ui.aFilter = tag;
  el.closest('.filter-chips').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderActivities();
}

document.getElementById('a-search').addEventListener('input', e => {
  ui.aSearch = e.target.value;
  renderActivities();
});

// ─── ACTIVITY LOG ─────────────────────────────────────────────────────────────
function openActivityLog(actIdx, memberId) {
  ui.logActivityIdx = actIdx;
  ui.logMember = memberId;
  ui.logPhotoFile = null;
  ui.logPhotoUrl = null;

  const a = ACTIVITIES[actIdx];
  document.getElementById('log-activity-title').textContent = a.title;
  document.getElementById('log-activity-why').textContent = a.detail + '\n\n' + a.why;
  document.getElementById('log-notes').value = '';
  document.getElementById('log-photo-input').value = '';
  document.getElementById('log-photo-preview-wrap').style.display = 'none';
  document.getElementById('log-photo-placeholder').style.display = 'flex';

  const who = document.getElementById('log-who');
  who.innerHTML = '';
  if (!state.members.length) {
    who.innerHTML = `<p style="font-size:0.85rem;color:var(--muted)">Add a family member from the Family tab first.</p>`;
  } else {
    state.members.forEach(m => {
      const opt = document.createElement('div');
      opt.className = 'who-opt' + (m.id === memberId ? ' selected' : '');
      opt.innerHTML = `${m.emoji} ${m.name}`;
      opt.dataset.id = m.id;
      opt.onclick = () => {
        document.querySelectorAll('#log-who .who-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        ui.logMember = m.id;
      };
      who.appendChild(opt);
    });
  }
  openSheet('activity-log-sheet');
}

function handleLogPhotoSelect(e) {
  const file = e.target.files[0];
  if (!file) return;
  ui.logPhotoFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    ui.logPhotoUrl = ev.target.result;
    document.getElementById('log-photo-preview').src = ev.target.result;
    document.getElementById('log-photo-preview-wrap').style.display = 'block';
    document.getElementById('log-photo-placeholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function removeLogPhoto() {
  ui.logPhotoFile = null;
  ui.logPhotoUrl = null;
  document.getElementById('log-photo-input').value = '';
  document.getElementById('log-photo-preview-wrap').style.display = 'none';
  document.getElementById('log-photo-placeholder').style.display = 'flex';
}

async function saveActivityLog() {
  if (!ui.logMember) { alert('Please select who did this activity.'); return; }

  const btn = document.getElementById('save-log-btn');
  btn.textContent = 'Saving…';
  btn.disabled = true;

  try {
    let photoUrl = null;
    if (ui.logPhotoFile && sb && state.familyId) {
      const ext = ui.logPhotoFile.name.split('.').pop();
      const path = `${state.familyId}/act_${Date.now()}.${ext}`;
      const { data: upData, error: upErr } = await sb.storage.from('photos').upload(path, ui.logPhotoFile);
      if (!upErr) {
        const { data: urlData } = sb.storage.from('photos').getPublicUrl(path);
        photoUrl = urlData?.publicUrl;
      }
    } else if (ui.logPhotoUrl && !sb) {
      photoUrl = ui.logPhotoUrl;
    }

    const log = {
      id: Date.now().toString(),
      memberId: ui.logMember,
      activityIdx: ui.logActivityIdx,
      notes: document.getElementById('log-notes').value.trim() || null,
      date: new Date().toISOString(),
      photoUrl,
    };

    if (sb && state.familyId) {
      const { data: row } = await sb.from('activity_logs').insert({
        family_id: state.familyId,
        member_id: log.memberId,
        activity_idx: log.activityIdx,
        notes: log.notes,
        photo_url: log.photoUrl,
        logged_at: log.date,
      }).select().single();
      if (row) log.id = row.id;
      setSyncStatus(true);
    }

    state.activityLogs.unshift(log);
    saveLocal();
    closeSheet();
    render();
    setScreen('journal');
  } finally {
    btn.textContent = '✅ Mark as Done';
    btn.disabled = false;
  }
}

function openActivityDetail(logId) {
  ui.detailLogId = logId;
  const log = state.activityLogs.find(l => l.id === logId);
  if (!log) return;
  const m = state.members.find(x => x.id === log.memberId);
  const a = ACTIVITIES[log.activityIdx];

  document.getElementById('act-detail-who').textContent = `${m?.emoji||'👤'} ${m?.name||'Unknown'} — ${fmtDate(log.date)}`;
  document.getElementById('act-detail-title').textContent = a.title;
  document.getElementById('act-detail-tag-row').innerHTML = `<span class="q-tag-sm tag-act-${a.tag}" style="display:inline-block;margin-bottom:0.75rem">${ACTIVITY_TAG_LABELS[a.tag]}</span>`;

  const notesBox = document.getElementById('act-detail-notes-box');
  if (log.notes) {
    document.getElementById('act-detail-notes').textContent = log.notes;
    notesBox.style.display = 'block';
  } else {
    notesBox.style.display = 'none';
  }

  document.getElementById('act-detail-meta').innerHTML = `<span class="meta-pill">Activity ${log.activityIdx+1} of 52</span>`;

  const photoWrap = document.getElementById('act-detail-photo-wrap');
  const photoImg = document.getElementById('act-detail-photo');
  if (log.photoUrl) { photoImg.src = log.photoUrl; photoWrap.style.display = 'block'; }
  else { photoWrap.style.display = 'none'; }

  openSheet('activity-detail-sheet');
}

async function deleteActivityLog() {
  if (!confirm('Delete this activity entry?')) return;
  if (sb) await sb.from('activity_logs').delete().eq('id', ui.detailLogId);
  state.activityLogs = state.activityLogs.filter(l => l.id !== ui.detailLogId);
  saveLocal();
  closeSheet();
  render();
}

// ─── JOURNAL ─────────────────────────────────────────────────────────────────
function renderJournal() {
  const strip = document.getElementById('journal-strip');
  strip.innerHTML = '';
  const allChip = mkJChip('all', '📖', 'All');
  strip.appendChild(allChip);
  state.members.forEach(m => strip.appendChild(mkJChip(m.id, m.emoji, m.name)));

  const entries = document.getElementById('journal-entries');
  entries.innerHTML = '';
  const allAnswers = state.answers.map(a => ({ ...a, _type: 'answer' }));
  const allLogs = state.activityLogs.map(l => ({ ...l, _type: 'activity' }));
  let filtered = [...allAnswers, ...allLogs].sort((a,b) => new Date(b.date)-new Date(a.date));
  if (ui.journalMember !== 'all') filtered = filtered.filter(a => a.memberId === ui.journalMember);

  if (!filtered.length) {
    entries.innerHTML = `<div class="empty-state"><div class="empty-icon">🌱</div><div class="empty-title">No entries yet</div><div class="empty-sub">Answer a question or log an activity to fill your journal.</div></div>`;
    return;
  }

  filtered.forEach(entry => {
    const m = state.members.find(x => x.id === entry.memberId);
    if (!m) return;
    const el = document.createElement('div');
    el.className = 'j-entry';

    if (entry._type === 'answer') {
      const q = QUESTIONS[entry.questionIdx];
      el.innerHTML = `
        ${entry.photoUrl ? `<img src="${entry.photoUrl}" class="j-photo" alt="Memory" />` : ''}
        <div class="j-entry-header">
          <div class="j-avatar">${m.emoji}</div>
          <div><div class="j-who">${m.name}</div><div class="j-q-num">Question ${entry.questionIdx+1}</div></div>
          <div class="j-when">${fmtDate(entry.date)}</div>
        </div>
        <div class="j-entry-body">
          <div class="j-question">${q.q}</div>
          <div class="j-answer">${escHtml(entry.answer)}</div>
        </div>
        <div class="j-entry-footer">
          <span class="j-age-tag">${entry.ageAtTime ? `Age ${entry.ageAtTime}` : ''}</span>
          <span class="q-tag-sm tag-${q.tag}">${TAG_LABELS[q.tag]}</span>
        </div>`;
      el.onclick = () => openDetail(entry.id);
    } else {
      const a = ACTIVITIES[entry.activityIdx];
      el.innerHTML = `
        ${entry.photoUrl ? `<img src="${entry.photoUrl}" class="j-photo" alt="Activity" />` : ''}
        <div class="j-entry-header">
          <div class="j-avatar">${m.emoji}</div>
          <div><div class="j-who">${m.name}</div><div class="j-q-num">Activity ${entry.activityIdx+1}</div></div>
          <div class="j-when">${fmtDate(entry.date)}</div>
        </div>
        <div class="j-entry-body">
          <div class="j-question">🎯 ${a.title}</div>
          ${entry.notes ? `<div class="j-answer">${escHtml(entry.notes)}</div>` : ''}
        </div>
        <div class="j-entry-footer">
          <span class="j-age-tag"></span>
          <span class="q-tag-sm tag-act-${a.tag}">${ACTIVITY_TAG_LABELS[a.tag]}</span>
        </div>`;
      el.onclick = () => openActivityDetail(entry.id);
    }
    entries.appendChild(el);
  });
}

function mkJChip(id, emoji, name) {
  const c = document.createElement('div');
  c.className = 'j-chip' + (ui.journalMember === id ? ' active' : '');
  c.innerHTML = `<span class="j-chip-emoji">${emoji}</span> ${name}`;
  c.onclick = () => { ui.journalMember = id; renderJournal(); };
  return c;
}

// ─── FAMILY ───────────────────────────────────────────────────────────────────
function renderFamily() {
  const list = document.getElementById('profile-list');
  list.innerHTML = '';
  state.members.forEach(m => {
    const count = state.answers.filter(a => a.memberId === m.id).length;
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
      <div class="profile-avatar-lg">${m.emoji}</div>
      <div class="profile-info">
        <div class="profile-name">${m.name}</div>
        <div class="profile-detail">${m.dob ? `Born ${m.dob}` : 'Family member'}</div>
      </div>
      <div class="profile-stat">
        <div class="stat-num">${count}</div>
        <div class="stat-label">answer${count!==1?'s':''}</div>
      </div>`;
    card.onclick = () => openEditMember(m.id);
    list.appendChild(card);
  });

  // Invite section (cloud only)
  const invSec = document.getElementById('invite-section');
  if (state.inviteCode) {
    invSec.style.display = 'block';
    document.getElementById('invite-code-display').textContent = state.inviteCode;
  }
}

function copyInviteCode() {
  navigator.clipboard.writeText(state.inviteCode || '').then(() => alert('Invite code copied! 🎉'));
}

// ─── COMPOSE ─────────────────────────────────────────────────────────────────
function openCompose(qIdx, memberId) {
  ui.composeQIdx = qIdx;
  ui.composeMember = memberId;
  ui.selectedPhotoFile = null;
  ui.selectedPhotoUrl = null;

  const q = QUESTIONS[qIdx];
  document.getElementById('compose-q').textContent = q.q;
  document.getElementById('compose-insight').textContent = q.insight;
  document.getElementById('compose-answer').value = '';
  document.getElementById('photo-input').value = '';
  document.getElementById('photo-preview-wrap').style.display = 'none';
  document.getElementById('photo-placeholder-text') && (document.getElementById('photo-placeholder-text').textContent = 'Tap to add a photo');

  const who = document.getElementById('compose-who');
  who.innerHTML = '';
  if (!state.members.length) {
    who.innerHTML = `<p style="font-size:0.85rem;color:var(--muted)">Add a family member from the Family tab first.</p>`;
  } else {
    state.members.forEach(m => {
      const opt = document.createElement('div');
      opt.className = 'who-opt' + (m.id === memberId ? ' selected' : '');
      opt.innerHTML = `${m.emoji} ${m.name}`;
      opt.dataset.id = m.id;
      opt.onclick = () => {
        document.querySelectorAll('.who-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        ui.composeMember = m.id;
      };
      who.appendChild(opt);
    });
  }

  openSheet('compose-sheet');
}

// Photo handling
function handlePhotoSelect(e) {
  const file = e.target.files[0];
  if (!file) return;
  ui.selectedPhotoFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    ui.selectedPhotoUrl = ev.target.result;
    document.getElementById('photo-preview').src = ev.target.result;
    document.getElementById('photo-preview-wrap').style.display = 'block';
    document.querySelector('.photo-placeholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function removePhoto() {
  ui.selectedPhotoFile = null;
  ui.selectedPhotoUrl = null;
  document.getElementById('photo-input').value = '';
  document.getElementById('photo-preview-wrap').style.display = 'none';
  document.querySelector('.photo-placeholder').style.display = 'flex';
}

async function saveAnswer() {
  const answer = document.getElementById('compose-answer').value.trim();
  if (!answer) { alert('Please write an answer first.'); return; }
  if (!ui.composeMember) { alert('Please select who is answering.'); return; }

  const btn = document.getElementById('save-answer-btn');
  btn.textContent = 'Saving…';
  btn.disabled = true;

  try {
    const member = state.members.find(m => m.id === ui.composeMember);
    const ageAtTime = member?.dob ? calcAge(member.dob) : null;
    let photoUrl = null;

    // Upload photo if selected
    if (ui.selectedPhotoFile && sb && state.familyId) {
      const ext = ui.selectedPhotoFile.name.split('.').pop();
      const path = `${state.familyId}/${Date.now()}.${ext}`;
      const { data: uploadData, error: upErr } = await sb.storage.from('photos').upload(path, ui.selectedPhotoFile);
      if (!upErr) {
        const { data: urlData } = sb.storage.from('photos').getPublicUrl(path);
        photoUrl = urlData?.publicUrl;
      }
    } else if (ui.selectedPhotoUrl && !sb) {
      // Offline: store base64 (limited but functional)
      photoUrl = ui.selectedPhotoUrl;
    }

    const entry = {
      id: Date.now().toString(),
      memberId: ui.composeMember,
      questionIdx: ui.composeQIdx,
      answer,
      date: new Date().toISOString(),
      ageAtTime,
      photoUrl,
    };

    // Cloud save
    if (sb && state.familyId) {
      const { data: row, error } = await sb.from('answers').insert({
        family_id: state.familyId,
        member_id: entry.memberId,
        question_idx: entry.questionIdx,
        answer: entry.answer,
        age_at_time: entry.ageAtTime,
        photo_url: entry.photoUrl,
        answered_at: entry.date,
      }).select().single();
      if (!error && row) entry.id = row.id;
      setSyncStatus(true);
    }

    state.answers.unshift(entry);
    saveLocal();
    closeSheet();
    render();
    setScreen('journal');
  } finally {
    btn.textContent = '💾 Save to Journal';
    btn.disabled = false;
  }
}

// ─── DETAIL ───────────────────────────────────────────────────────────────────
function openDetail(answerId) {
  ui.detailAnswerId = answerId;
  const entry = state.answers.find(a => a.id === answerId);
  if (!entry) return;
  const m = state.members.find(x => x.id === entry.memberId);
  const q = QUESTIONS[entry.questionIdx];

  document.getElementById('detail-who').textContent = `${m?.emoji||'👤'} ${m?.name||'Unknown'} — ${fmtDate(entry.date)}`;
  document.getElementById('detail-q').textContent = q.q;
  document.getElementById('detail-answer').textContent = entry.answer;
  document.getElementById('detail-meta').innerHTML = `
    <span class="meta-pill">Q${entry.questionIdx+1} of 52</span>
    <span class="meta-pill q-tag-sm tag-${q.tag}">${TAG_LABELS[q.tag]}</span>
    ${entry.ageAtTime ? `<span class="meta-pill">Age ${entry.ageAtTime}</span>` : ''}`;

  const photoWrap = document.getElementById('detail-photo-wrap');
  const photoImg = document.getElementById('detail-photo');
  if (entry.photoUrl) {
    photoImg.src = entry.photoUrl;
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }

  openSheet('detail-sheet');
}

async function deleteEntry() {
  if (!confirm('Delete this journal entry?')) return;
  if (sb && state.familyId) {
    await sb.from('answers').delete().eq('id', ui.detailAnswerId);
  }
  state.answers = state.answers.filter(a => a.id !== ui.detailAnswerId);
  saveLocal();
  closeSheet();
  render();
}

// ─── MEMBERS ─────────────────────────────────────────────────────────────────
function openAddMember() {
  ui.editMemberId = null;
  document.getElementById('member-sheet-title').textContent = 'Add Family Member';
  document.getElementById('member-name').value = '';
  document.getElementById('member-dob').value = '';
  ui.selectedEmoji = '🌟';
  renderEmojiGrid();
  document.getElementById('delete-member-btn').style.display = 'none';
  openSheet('member-sheet');
}

function openEditMember(id) {
  ui.editMemberId = id;
  const m = state.members.find(x => x.id === id);
  if (!m) return;
  document.getElementById('member-sheet-title').textContent = 'Edit Member';
  document.getElementById('member-name').value = m.name;
  document.getElementById('member-dob').value = m.dob || '';
  ui.selectedEmoji = m.emoji;
  renderEmojiGrid();
  document.getElementById('delete-member-btn').style.display = 'block';
  openSheet('member-sheet');
}

function renderEmojiGrid() {
  const grid = document.getElementById('emoji-grid');
  grid.innerHTML = '';
  EMOJIS.forEach(e => {
    const opt = document.createElement('div');
    opt.className = 'emoji-opt' + (e === ui.selectedEmoji ? ' selected' : '');
    opt.textContent = e;
    opt.onclick = () => {
      ui.selectedEmoji = e;
      document.querySelectorAll('.emoji-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    };
    grid.appendChild(opt);
  });
}

async function saveMember() {
  const name = document.getElementById('member-name').value.trim();
  if (!name) { alert('Please enter a name.'); return; }
  const dob = document.getElementById('member-dob').value;

  if (ui.editMemberId) {
    const m = state.members.find(x => x.id === ui.editMemberId);
    if (m) {
      m.name = name; m.emoji = ui.selectedEmoji; m.dob = dob;
      if (sb && state.familyId) {
        await sb.from('members').update({ name, emoji: ui.selectedEmoji, dob }).eq('id', m.id);
      }
    }
  } else {
    const newMember = { id: Date.now().toString(), name, emoji: ui.selectedEmoji, dob };
    if (sb && state.familyId) {
      const { data: row } = await sb.from('members').insert({
        family_id: state.familyId, name, emoji: ui.selectedEmoji, dob
      }).select().single();
      if (row) newMember.id = row.id;
    }
    state.members.push(newMember);
  }
  saveLocal();
  closeSheet();
  render();
}

async function deleteMember() {
  if (!confirm('Remove this family member? Their answers will be kept.')) return;
  if (sb) await sb.from('members').delete().eq('id', ui.editMemberId);
  state.members = state.members.filter(m => m.id !== ui.editMemberId);
  saveLocal();
  closeSheet();
  render();
}

// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function openSettings() {
  document.getElementById('settings-family').value = state.familyName;

  const cloudInfo = document.getElementById('cloud-info');
  const cloudBtn = document.getElementById('cloud-action-btn');
  if (sb && currentUser) {
    cloudInfo.innerHTML = `<span style="color:var(--green)">●</span> Synced · ${currentUser.email}`;
    cloudBtn.textContent = '🚪 Sign out';
    cloudBtn.onclick = signOut;
  } else {
    cloudInfo.innerHTML = `<span style="color:#bbb">●</span> Offline mode`;
    cloudBtn.textContent = '☁️ Set up cloud sync';
    cloudBtn.onclick = () => { closeSheet(); showSetup(); };
  }
  openSheet('settings-sheet');
}

async function saveSettings() {
  const name = document.getElementById('settings-family').value.trim() || state.familyName;
  state.familyName = name;
  if (sb && state.familyId) {
    await sb.from('families').update({ name }).eq('id', state.familyId);
  }
  saveLocal();
  closeSheet();
  render();
}

async function signOut() {
  if (sb) await sb.auth.signOut();
  currentUser = null;
  closeSheet();
  hide('app');
  show('auth-screen');
}

function cloudAction() {} // replaced dynamically in openSettings

// ─── SHEETS ───────────────────────────────────────────────────────────────────
function openSheet(id) {
  document.getElementById('overlay').classList.add('open');
  document.querySelectorAll('.sheet').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function closeSheet() {
  document.getElementById('overlay').classList.remove('open');
  document.querySelectorAll('.sheet').forEach(s => s.style.display = 'none');
}

document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('overlay')) closeSheet();
});

// ─── UTILS ────────────────────────────────────────────────────────────────────
function fmtDate(iso) {
  const d = new Date(iso);
  const days = Math.floor((Date.now() - d) / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: d.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined });
}

function calcAge(dob) {
  const b = new Date(dob), now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  if (now.getMonth() < b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())) age--;
  return age;
}

function escHtml(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}

function show(id) { const el = document.getElementById(id); if (el) el.style.display = 'flex'; }
function hide(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
