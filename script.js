/* ===== English Journey — script.js ===== */

// ---------- Data ----------
const GREETINGS = [
    { en: "Hello! / Hi!", cn: "你好！" },
    { en: "Good morning. / Good afternoon. / Good evening.", cn: "早上好 / 下午好 / 晚上好" },
    { en: "How are you? — I'm fine, thank you.", cn: "你好吗？——我很好，谢谢。" },
    { en: "What's your name? — My name is Li Ming.", cn: "你叫什么名字？——我叫李明。" },
    { en: "Nice to meet you. — Nice to meet you, too.", cn: "很高兴认识你。——我也是。" },
    { en: "See you later. / Goodbye. / Bye-bye.", cn: "回头见 / 再见 / 拜拜" },
    { en: "Thank you. — You're welcome.", cn: "谢谢。——不客气。" },
    { en: "I'm sorry. — That's OK.", cn: "对不起。——没关系。" },
];

const QUESTIONS = [
    { en: "Do you like coffee? — Yes, I do. / No, I don't.", cn: "你喜欢咖啡吗？——喜欢 / 不喜欢。（do 开头的是非问）" },
    { en: "What is this? — It's a book.", cn: "这是什么？——是一本书。（what 问事物）" },
    { en: "Where do you live? — I live in Shanghai.", cn: "你住在哪里？——我住在上海。（where 问地点）" },
    { en: "When do you get up? — At seven o'clock.", cn: "你几点起床？——七点。（when 问时间）" },
    { en: "Who is she? — She is my sister.", cn: "她是谁？——她是我妹妹。（who 问人）" },
    { en: "How much is it? — It's ten dollars.", cn: "多少钱？——十美元。（how much 问价格）" },
    { en: "Can you help me? — Sure, no problem.", cn: "你能帮我吗？——当然，没问题。（can 问能力/请求）" },
];

const VERBS = [
    "be 是", "have 有", "do 做", "go 去", "come 来", "eat 吃", "drink 喝", "sleep 睡",
    "work 工作", "play 玩", "read 读", "write 写", "speak 说", "listen 听", "see 看见",
    "look 看", "walk 走", "run 跑", "buy 买", "sell 卖", "make 制作", "know 知道",
    "think 想", "want 想要", "like 喜欢", "love 爱", "need 需要", "give 给", "take 拿", "help 帮助",
];

const PHRASALS = [
    { en: "give up", cn: "放弃", ex: "Don't give up. 不要放弃。" },
    { en: "wake up", cn: "醒来", ex: "I wake up at 6:30. 我六点半醒来。" },
    { en: "get up", cn: "起床", ex: "She gets up early. 她起得早。" },
    { en: "look for", cn: "寻找", ex: "I'm looking for my keys. 我在找钥匙。" },
    { en: "find out", cn: "查明", ex: "I found out the truth. 我查明了真相。" },
    { en: "put on", cn: "穿上", ex: "Put on your coat. 穿上外套。" },
    { en: "take off", cn: "脱下；（飞机）起飞", ex: "The plane took off. 飞机起飞了。" },
    { en: "turn on / off", cn: "打开 / 关闭（电器）", ex: "Turn off the lights. 关灯。" },
    { en: "pick up", cn: "捡起；（顺路）接人", ex: "I'll pick you up at 8. 我八点来接你。" },
    { en: "come up with", cn: "想出（主意）", ex: "He came up with a plan. 他想出了一个计划。" },
    { en: "look forward to", cn: "期待", ex: "I look forward to seeing you. 期待见到你。" },
    { en: "run out of", cn: "用完", ex: "We ran out of milk. 牛奶喝完了。" },
];

const CLASSROOM = [
    { en: "Could you repeat that, please?", cn: "能请你再说一遍吗？" },
    { en: "What does this word mean?", cn: "这个单词是什么意思？" },
    { en: "How do you spell it?", cn: "怎么拼写？" },
    { en: "Could you speak more slowly?", cn: "能说慢一点吗？" },
    { en: "I have a question about the assignment.", cn: "关于这个作业我有个问题。" },
    { en: "Is this correct? / Is this right?", cn: "这样对吗？" },
    { en: "Sorry, I don't understand.", cn: "抱歉，我没听懂。" },
    { en: "Could you explain it in another way?", cn: "能换个方式解释吗？" },
    { en: "What should I read for next class?", cn: "下节课要读什么？" },
    { en: "When is the deadline?", cn: "截止日期是什么时候？" },
];

const IELTS_SPEAKING = [
    { en: "Where are you from? — I'm from Hangzhou, a beautiful city in eastern China.", cn: "你来自哪里？（城市 + 一句描述）" },
    { en: "Do you work or study? — I work as a designer at a small company.", cn: "你工作还是上学？（说清职业/专业）" },
    { en: "What do you do in your free time? — I enjoy painting and visiting museums.", cn: "空闲时间做什么？（爱好 + 原因）" },
    { en: "Do you like your hometown? — Yes. It's famous for its lakes and tea.", cn: "你喜欢家乡吗？（喜欢 + 特色）" },
    { en: "What kind of food do you like? — I love spicy food, especially Sichuan dishes.", cn: "你喜欢什么食物？（食物 + 例子）" },
    { en: "How do you usually travel to work? — I take the subway. It's fast and cheap.", cn: "你怎么通勤？（方式 + 一句理由）" },
    { en: "Do you prefer reading books or watching movies? — I prefer books because I can imagine the scenes myself.", cn: "更喜欢看书还是看电影？（选择 + 原因）" },
    { en: "What's your favorite season? — Autumn. The weather is cool and the leaves turn golden.", cn: "最喜欢的季节？（季节 + 两点理由）" },
];

const EMAIL = [
    { en: "Subject: Meeting Request: Q3 Budget Review", cn: "主题行写清目的，一眼看懂。" },
    { en: "Dear Mr. Smith, / Hi Anna,", cn: "开头称呼：正式用 Dear + 姓，同事用 Hi + 名。" },
    { en: "I'm writing to confirm our meeting on Friday.", cn: "I'm writing to… 说明来意（万能开头）。" },
    { en: "Please find the report attached.", cn: "附件是报告。（附文件必备句）" },
    { en: "Could you please send me the updated version by Thursday?", cn: "Could you please… 礼貌提要求 + 期限。" },
    { en: "Just a quick reminder that the deadline is next Monday.", cn: "温和提醒。" },
    { en: "Thanks for your quick reply.", cn: "感谢快速回复。" },
    { en: "If you have any questions, feel free to ask.", cn: "有疑问随时问。" },
    { en: "I look forward to hearing from you.", cn: "期待你的回复。（正式结尾）" },
    { en: "Best regards, / Best, / Cheers,", cn: "落款：正式到随意三档。" },
];

const MEETING = [
    { en: "Let's get started.", cn: "我们开始吧。（开场）" },
    { en: "Today we're here to discuss the new project.", cn: "今天我们要讨论新项目。（说明议题）" },
    { en: "Could you share your screen?", cn: "能共享一下屏幕吗？" },
    { en: "Sorry to interrupt, but I have a quick question.", cn: "抱歉打断一下，我有个小问题。" },
    { en: "From my point of view, the timeline is too tight.", cn: "在我看来，时间太紧了。（表达观点）" },
    { en: "I see your point, but have we considered the cost?", cn: "我明白你的意思，但考虑过成本吗？（委婉反驳）" },
    { en: "Let's put a pin in that and come back to it later.", cn: "这个先放一放，回头再谈。（常用口语）" },
    { en: "To sum up, we agreed on the budget and the deadline.", cn: "总结一下……（收尾）" },
    { en: "I'll send out the meeting notes after this.", cn: "会后我把会议纪要发出来。" },
];

const INTERVIEW = [
    { en: "Tell me about yourself. — I'm a marketing specialist with five years of experience.", cn: "自我介绍：身份 + 经验 + 一项成果，控制在 1 分钟内。" },
    { en: "What are your strengths? — I'm detail-oriented and good at solving problems under pressure.", cn: "优点：两个特质 + 可以简短举例。" },
    { en: "What is your biggest weakness? — I used to be too focused on details, so now I set time limits for myself.", cn: "缺点：说真实的 + 已在改进。" },
    { en: "Why do you want to work here? — I admire your company's focus on innovation, and this role fits my skills well.", cn: "为什么来：夸公司具体点 + 匹配度。" },
    { en: "Where do you see yourself in five years? — I hope to grow into a team lead role.", cn: "五年规划：跟岗位方向一致即可。" },
    { en: "Do you have any questions for us? — Yes, what does success look like in this role?", cn: "反问环节：一定要问，展示诚意。" },
];

const RESUME_VERBS = [
    "managed 管理", "led 领导", "developed 开发", "designed 设计", "increased 提升",
    "reduced 降低", "improved 改进", "created 创建", "launched 推出", "organized 组织",
    "analyzed 分析", "coordinated 协调", "trained 培训", "achieved 达成", "negotiated 谈判",
    "solved 解决", "launched 启动", "streamlined 优化流程",
];

const SHOPPING = [
    { en: "Excuse me, where can I find the milk?", cn: "请问牛奶在哪？（问商品位置）" },
    { en: "How much is this? / How much are these?", cn: "这个多少钱？" },
    { en: "Do you have this in a larger / smaller size?", cn: "有大一号 / 小一号的吗？" },
    { en: "Can I try this on?", cn: "我能试穿吗？" },
    { en: "It's a bit expensive. Is there any discount?", cn: "有点贵，有折扣吗？" },
    { en: "I'll take it. / I'm just looking, thanks.", cn: "我买了 / 我随便看看，谢谢。" },
    { en: "Can I pay by card? / Cash, please.", cn: "能刷卡吗？/ 付现金。" },
    { en: "Can I get a receipt, please?", cn: "能给我一张收据吗？" },
    { en: "I'd like to return this. It doesn't fit.", cn: "我想退这个，不合身。" },
];

const RESTAURANT = [
    { en: "A table for two, please.", cn: "两位。（进门第一句）" },
    { en: "Could we see the menu, please?", cn: "能看下菜单吗？" },
    { en: "What do you recommend?", cn: "你有什么推荐？" },
    { en: "I'll have the chicken salad.", cn: "我要鸡肉沙拉。（点餐万能句：I'll have…）" },
    { en: "Could I get that without onions?", cn: "能不要洋葱吗？" },
    { en: "Is this dish spicy?", cn: "这道菜辣吗？" },
    { en: "Could we have some water, please?", cn: "能给我们来点水吗？" },
    { en: "It was delicious, thank you.", cn: "很好吃，谢谢。" },
    { en: "Could we have the bill, please?", cn: "能结账吗？（英式）；Check, please.（美式）" },
];

const HEALTH = [
    { en: "I have a headache / a sore throat / a fever.", cn: "我头疼 / 嗓子疼 / 发烧。（I have a + 症状）" },
    { en: "I feel dizzy. / I feel sick.", cn: "我头晕 / 我想吐。" },
    { en: "I need to see a doctor.", cn: "我需要看医生。" },
    { en: "I'd like to make an appointment.", cn: "我想预约。" },
    { en: "I'm allergic to peanuts.", cn: "我对花生过敏。（重要！背下来）" },
    { en: "How often should I take this medicine?", cn: "这药多久吃一次？" },
    { en: "Does it hurt when I press here?", cn: "我按这里疼吗？" },
    { en: "Where is the nearest pharmacy?", cn: "最近的药店在哪？" },
];

const AIRPORT = [
    { en: "Excuse me, where is the check-in counter for Flight CA123?", cn: "请问 CA123 航班的值机柜台在哪？" },
    { en: "Here is my passport and boarding pass.", cn: "这是我的护照和登机牌。" },
    { en: "I have one suitcase to check in.", cn: "我有一件行李要托运。" },
    { en: "Is my flight on time? / My flight is delayed.", cn: "我的航班准点吗？/ 航班延误了。" },
    { en: "Where is Gate 12?", cn: "12 号登机口在哪？" },
    { en: "How long is the layover?", cn: "中转要等多久？" },
    { en: "I missed my flight. What should I do?", cn: "我错过了航班，怎么办？" },
    { en: "Where can I pick up my luggage?", cn: "在哪里取行李？" },
];

const HOTEL = [
    { en: "I have a reservation under the name Chen.", cn: "我订了房，名字是陈。（under the name…）" },
    { en: "Do you have any rooms available tonight?", cn: "今晚有空房吗？" },
    { en: "What time is check-out?", cn: "几点退房？" },
    { en: "Is breakfast included?", cn: "含早餐吗？" },
    { en: "Could I have the Wi-Fi password?", cn: "能给我 Wi-Fi 密码吗？" },
    { en: "The air conditioner doesn't work. Could you send someone?", cn: "空调坏了，能派人来修吗？" },
    { en: "Could I check out late? My flight is at 8 pm.", cn: "能延迟退房吗？我的航班晚上八点。" },
    { en: "Can you keep my luggage for a few hours?", cn: "能帮我寄存几小时行李吗？" },
];

const DIRECTIONS = [
    { en: "Excuse me, how do I get to the train station?", cn: "请问火车站怎么走？（万能问路句）" },
    { en: "Is it far from here? / Can I walk there?", cn: "离这儿远吗？/ 能走着去吗？" },
    { en: "Go straight and turn left at the second street.", cn: "直走，在第二个路口左转。（听懂这些指令）" },
    { en: "Could you show me on the map?", cn: "能在地图上指给我看吗？（听不懂时的救命题）" },
    { en: "Which bus goes to the city center?", cn: "哪路公交车去市中心？" },
    { en: "Is this the right way to the museum?", cn: "去博物馆是走这条路吗？" },
    { en: "Sorry, I didn't catch that. Could you say it again?", cn: "抱歉没听清，能再说一遍吗？" },
];

const EMERGENCY = [
    { en: "Help! / Emergency!", cn: "救命！/ 紧急情况！" },
    { en: "Call 911! (US) / Call 999! (UK) / 112 (Europe)", cn: "各国报警急救电话，出发前记下来。" },
    { en: "I need a doctor. It's urgent.", cn: "我需要医生，很急。" },
    { en: "I lost my passport.", cn: "我的护照丢了。" },
    { en: "My wallet / phone was stolen.", cn: "我的钱包 / 手机被偷了。" },
    { en: "Where is the Chinese embassy?", cn: "中国大使馆在哪？" },
    { en: "I need to contact the police.", cn: "我需要联系警察。" },
    { en: "Please write it down for me.", cn: "请帮我写下来。（听不懂就请对方写）" },
];

const IELTS_VOCAB = [
    "environmental protection 环保", "urbanization 城市化", "globalization 全球化",
    "sustainable development 可持续发展", "quality of life 生活质量", "work-life balance 工作生活平衡",
    "technological advance 技术进步", "artificial intelligence 人工智能", "cultural heritage 文化遗产",
    "public transport 公共交通", "health-conscious 注重健康的", "aging population 老龄化",
    "consumer society 消费社会", "social media 社交媒体", "distance learning 远程教育",
    "economic growth 经济增长", "carbon emission 碳排放", "digital literacy 数字素养",
];

const ALPHABET_SOUNDS = {
    A: "诶", B: "必", C: "西", D: "地", E: "衣", F: "诶夫", G: "记", H: "诶去",
    I: "爱", J: "捷", K: "凯", L: "诶欧", M: "诶姆", N: "恩", O: "欧", P: "屁",
    Q: "扣", R: "阿", S: "诶斯", T: "替", U: "优", V: "威", W: "达布溜",
    X: "诶克斯", Y: "歪", Z: "贼德",
};

const NUMBERS = [
    "1 one", "2 two", "3 three", "4 four", "5 five", "6 six", "7 seven", "8 eight",
    "9 nine", "10 ten", "11 eleven", "12 twelve", "13 thirteen", "20 twenty",
    "30 thirty", "100 one hundred", "1,000 one thousand", "1st first", "2nd second", "3rd third",
];

const COLORS = [
    ["red", "红色", "#c0504d"], ["orange", "橙色", "#d9903f"], ["yellow", "黄色", "#d9c23f"],
    ["green", "绿色", "#6a9a5c"], ["blue", "蓝色", "#5c7fa8"], ["purple", "紫色", "#8a6a9a"],
    ["pink", "粉色", "#d98aa8"], ["brown", "棕色", "#8a6844"], ["black", "黑色", "#3d3833"],
    ["white", "白色", "#ffffff"], ["gray", "灰色", "#9a948c"],
];

const FLASHCARDS = [
    // 基础
    { cat: "基础", w: "hello", m: "你好；打招呼用语", ex: "Hello, nice to meet you!" },
    { cat: "基础", w: "morning", m: "早晨；上午", ex: "Good morning, everyone." },
    { cat: "基础", w: "friend", m: "朋友", ex: "She is my best friend." },
    { cat: "基础", w: "water", m: "水", ex: "Could I have some water?" },
    { cat: "基础", w: "food", m: "食物", ex: "Chinese food is delicious." },
    { cat: "基础", w: "happy", m: "开心的", ex: "I am happy today." },
    { cat: "基础", w: "tired", m: "疲倦的", ex: "I'm tired after work." },
    { cat: "基础", w: "book", m: "书", ex: "I read a book every night." },
    { cat: "基础", w: "family", m: "家庭；家人", ex: "I love my family." },
    { cat: "基础", w: "time", m: "时间", ex: "What time is it?" },
    // 日常
    { cat: "日常", w: "grocery store", m: "食品杂货店", ex: "I go to the grocery store on Sundays." },
    { cat: "日常", w: "receipt", m: "收据", ex: "Can I get a receipt, please?" },
    { cat: "日常", w: "order", m: "点餐；订购", ex: "Are you ready to order?" },
    { cat: "日常", w: "appointment", m: "预约", ex: "I have a dentist appointment at 3 pm." },
    { cat: "日常", w: "weather", m: "天气", ex: "The weather is nice today." },
    { cat: "日常", w: "pharmacy", m: "药店", ex: "Where is the nearest pharmacy?" },
    { cat: "日常", w: "dish", m: "菜；盘子", ex: "This dish is a bit spicy." },
    { cat: "日常", w: "medicine", m: "药", ex: "Take this medicine twice a day." },
    { cat: "日常", w: "neighbor", m: "邻居", ex: "My neighbor is very friendly." },
    { cat: "日常", w: "weekend", m: "周末", ex: "What are you doing this weekend?" },
    // 职场
    { cat: "职场", w: "deadline", m: "截止日期", ex: "The deadline is next Friday." },
    { cat: "职场", w: "colleague", m: "同事", ex: "My colleague will cover for me." },
    { cat: "职场", w: "schedule", m: "日程；安排", ex: "Let's schedule a meeting for Monday." },
    { cat: "职场", w: "attach", m: "附上（文件）", ex: "Please find the report attached." },
    { cat: "职场", w: "resume / CV", m: "简历", ex: "Send your resume to the HR department." },
    { cat: "职场", w: "interview", m: "面试", ex: "I have a job interview tomorrow." },
    { cat: "职场", w: "negotiate", m: "谈判；协商", ex: "We negotiated a better price." },
    { cat: "职场", w: "efficiency", m: "效率", ex: "The new tool improves efficiency." },
    { cat: "职场", w: "feedback", m: "反馈", ex: "Thanks for your feedback." },
    { cat: "职场", w: "supervisor", m: "主管；上级", ex: "Talk to your supervisor first." },
    // 旅游
    { cat: "旅游", w: "boarding pass", m: "登机牌", ex: "Here is my boarding pass." },
    { cat: "旅游", w: "luggage", m: "行李", ex: "I lost my luggage at the airport." },
    { cat: "旅游", w: "reservation", m: "预订", ex: "I have a reservation under the name Chen." },
    { cat: "旅游", w: "destination", m: "目的地", ex: "What's your destination?" },
    { cat: "旅游", w: "souvenir", m: "纪念品", ex: "I bought a souvenir for my mom." },
    { cat: "旅游", w: "itinerary", m: "行程单", ex: "Check the itinerary before we leave." },
    { cat: "旅游", w: "currency", m: "货币", ex: "What's the local currency?" },
    { cat: "旅游", w: "embassy", m: "大使馆", ex: "The embassy can replace your passport." },
    { cat: "旅游", w: "sightseeing", m: "观光", ex: "We went sightseeing all afternoon." },
    { cat: "旅游", w: "layover", m: "中转停留", ex: "We have a three-hour layover in Tokyo." },
    // 学术/雅思
    { cat: "学术/雅思", w: "significant", m: "显著的；重要的", ex: "There was a significant improvement in scores." },
    { cat: "学术/雅思", w: "evidence", m: "证据", ex: "The evidence supports this hypothesis." },
    { cat: "学术/雅思", w: "analyze", m: "分析", ex: "The study analyzes data from 500 people." },
    { cat: "学术/雅思", w: "hypothesis", m: "假设", ex: "Our hypothesis was confirmed." },
    { cat: "学术/雅思", w: "implication", m: "影响；含义", ex: "The implications of this are broad." },
    { cat: "学术/雅思", w: "urbanization", m: "城市化", ex: "Urbanization brings both benefits and problems." },
    { cat: "学术/雅思", w: "sustainable", m: "可持续的", ex: "We need sustainable development." },
    { cat: "学术/雅思", w: "controversial", m: "有争议的", ex: "This is a controversial topic." },
    { cat: "学术/雅思", w: "advocate", m: "提倡；主张", ex: "Many experts advocate remote work." },
    { cat: "学术/雅思", w: "phenomenon", m: "现象", ex: "This phenomenon is worth studying." },
    // 基础 · 第二批
    { cat: "基础", w: "thank", m: "感谢", ex: "Thank you for your help." },
    { cat: "基础", w: "please", m: "请", ex: "Please sit down." },
    { cat: "基础", w: "school", m: "学校", ex: "My son goes to school by bus." },
    { cat: "基础", w: "work", m: "工作；上班", ex: "I go to work at eight." },
    { cat: "基础", w: "house", m: "房子", ex: "Their house is near the park." },
    { cat: "基础", w: "money", m: "钱", ex: "I saved money for the trip." },
    { cat: "基础", w: "city", m: "城市", ex: "Shanghai is a big city." },
    { cat: "基础", w: "week", m: "星期；周", ex: "See you next week." },
    { cat: "基础", w: "year", m: "年", ex: "Happy New Year!" },
    { cat: "基础", w: "today", m: "今天", ex: "Today is Monday." },
    { cat: "基础", w: "tomorrow", m: "明天", ex: "I'll call you tomorrow." },
    { cat: "基础", w: "beautiful", m: "美丽的", ex: "What a beautiful garden!" },
    { cat: "基础", w: "difficult", m: "困难的", ex: "English grammar is not that difficult." },
    { cat: "基础", w: "easy", m: "容易的", ex: "This exercise is easy." },
    { cat: "基础", w: "new", m: "新的", ex: "I bought a new phone." },
    // 日常 · 第二批
    { cat: "日常", w: "budget", m: "预算", ex: "My budget for food is 500 yuan a week." },
    { cat: "日常", w: "laundry", m: "洗衣；待洗衣物", ex: "I do laundry on Saturdays." },
    { cat: "日常", w: "recipe", m: "食谱", ex: "Can you share this recipe with me?" },
    { cat: "日常", w: "symptom", m: "症状", ex: "What are your symptoms?" },
    { cat: "日常", w: "delivery", m: "配送；快递", ex: "The delivery arrives tomorrow." },
    { cat: "日常", w: "hobby", m: "爱好", ex: "Painting is my favorite hobby." },
    { cat: "日常", w: "trash", m: "垃圾", ex: "Take out the trash, please." },
    { cat: "日常", w: "exercise", m: "锻炼；练习", ex: "I exercise three times a week." },
    { cat: "日常", w: "chore", m: "家务", ex: "We share the chores at home." },
    { cat: "日常", w: "party", m: "聚会", ex: "Are you coming to the party?" },
    { cat: "日常", w: "gift", m: "礼物", ex: "I bought a gift for her birthday." },
    { cat: "日常", w: "rest", m: "休息", ex: "You should take a rest." },
    { cat: "日常", w: "library", m: "图书馆", ex: "I study at the library." },
    { cat: "日常", w: "market", m: "市场", ex: "Fresh vegetables at the market." },
    { cat: "日常", w: "pharmacy", m: "药店", ex: "The pharmacy closes at 10 pm." },
    // 职场 · 第二批
    { cat: "职场", w: "promotion", m: "晋升", ex: "She got a promotion last month." },
    { cat: "职场", w: "salary", m: "薪水", ex: "They offered a higher salary." },
    { cat: "职场", w: "client", m: "客户", ex: "The client approved the proposal." },
    { cat: "职场", w: "proposal", m: "提案；方案", ex: "I'll send the proposal today." },
    { cat: "职场", w: "conference", m: "会议；大会", ex: "He is at a conference in Beijing." },
    { cat: "职场", w: "colleague", m: "同事", ex: "My colleagues are very supportive." },
    { cat: "职场", w: "priority", m: "优先事项", ex: "This task is our top priority." },
    { cat: "职场", w: "collaborate", m: "协作", ex: "The two teams collaborate closely." },
    { cat: "职场", w: "outsource", m: "外包", ex: "We outsource the design work." },
    { cat: "职场", w: "evaluate", m: "评估", ex: "We will evaluate the results next week." },
    { cat: "职场", w: "benefit", m: "福利；好处", ex: "The job comes with good benefits." },
    { cat: "职场", w: "resign", m: "辞职", ex: "He resigned for personal reasons." },
    { cat: "职场", w: "workload", m: "工作量", ex: "My workload is heavy this month." },
    { cat: "职场", w: "achievement", m: "成就；业绩", ex: "List your achievements on the resume." },
    { cat: "职场", w: "productive", m: "高效的", ex: "Morning hours are my productive time." },
    // 旅游 · 第二批
    { cat: "旅游", w: "passport", m: "护照", ex: "Keep your passport safe." },
    { cat: "旅游", w: "visa", m: "签证", ex: "Do I need a visa for this country?" },
    { cat: "旅游", w: "customs", m: "海关", ex: "We cleared customs quickly." },
    { cat: "旅游", w: "departure", m: "出发；离境", ex: "Check the departure time online." },
    { cat: "旅游", w: "arrival", m: "到达", ex: "The arrival time is 3 pm." },
    { cat: "旅游", w: "baggage claim", m: "行李提取处", ex: "Meet me at baggage claim." },
    { cat: "旅游", w: "hostel", m: "青年旅舍", ex: "Hostels are cheaper than hotels." },
    { cat: "旅游", w: "landmark", m: "地标", ex: "The tower is a famous landmark." },
    { cat: "旅游", w: "guidebook", m: "旅行指南", ex: "I bought a guidebook at the airport." },
    { cat: "旅游", w: "exchange", m: "兑换", ex: "Where can I exchange money?" },
    { cat: "旅游", w: "scenic", m: "风景优美的", ex: "This is a scenic route along the coast." },
    { cat: "旅游", w: "vacant", m: "空着的", ex: "Are there any vacant rooms tonight?" },
    { cat: "旅游", w: "aisle", m: "过道（座位）", ex: "I'd like an aisle seat, please." },
    { cat: "旅游", w: "window seat", m: "靠窗座位", ex: "She prefers a window seat." },
    { cat: "旅游", w: "lost and found", m: "失物招领处", ex: "Check the lost and found office." },
    // 学术/雅思 · 第二批
    { cat: "学术/雅思", w: "academy", m: "学院；研究院", ex: "She studies at a music academy." },
    { cat: "学术/雅思", w: "criterion", m: "标准（复数 criteria）", ex: "What are the criteria for grading?" },
    { cat: "学术/雅思", w: "deteriorate", m: "恶化", ex: "Air quality deteriorated last winter." },
    { cat: "学术/雅思", w: "emphasis", m: "重点；强调", ex: "The course places emphasis on writing." },
    { cat: "学术/雅思", w: "inevitable", m: "不可避免的", ex: "Some change is inevitable." },
    { cat: "学术/雅思", w: "justify", m: "证明……合理", ex: "The data justifies the conclusion." },
    { cat: "学术/雅思", w: "maintain", m: "维持；坚持认为", ex: "He maintains that the plan works." },
    { cat: "学术/雅思", w: "obesity", m: "肥胖", ex: "Obesity is a growing health issue." },
    { cat: "学术/雅思", w: "priority", m: "优先；重点", ex: "Education should be a priority." },
    { cat: "学术/雅思", w: "widespread", m: "普遍的；广泛的", ex: "The use of smartphones is widespread." },
    { cat: "学术/雅思", w: "consumption", m: "消费；消耗", ex: "Energy consumption keeps rising." },
    { cat: "学术/雅思", w: "legislation", m: "立法；法规", ex: "New legislation limits emissions." },
    { cat: "学术/雅思", w: "perspective", m: "视角；观点", ex: "From an economic perspective, …" },
    { cat: "学术/雅思", w: "undermine", m: "削弱", ex: "Stress can undermine performance." },
    { cat: "学术/雅思", w: "vital", m: "至关重要的", ex: "Sleep is vital for memory." },
];

const QUIZ = [
    { q: "「我昨天去了书店。」正确的是：", opts: ["I go to the bookstore yesterday.", "I went to the bookstore yesterday.", "I will go to the bookstore yesterday."], a: 1, tip: "yesterday 提示过去式：go → went。" },
    { q: "「她已经完成了作业。」正确的是：", opts: ["She finish her homework already.", "She has finished her homework already.", "She finishing her homework already."], a: 1, tip: "already 是现在完成时的信号词：have/has + 过去分词。" },
    { q: "How much is it? 是在问什么？", opts: ["价格", "数量", "时间"], a: 0, tip: "how much 问价格，how many 问数量。" },
    { q: "「Don't give up」中 give up 的意思是：", opts: ["给上面", "放弃", "起床"], a: 1, tip: "give up = 放弃；wake up = 醒来。" },
    { q: "「Can I try this on?」用在什么场合？", opts: ["餐厅", "买衣服", "机场"], a: 1, tip: "try on = 试穿。" },
    { q: "邮件结尾最正式的落款是：", opts: ["Cheers,", "Best regards,", "See you,"], a: 1, tip: "Best regards 用于正式邮件；Cheers 偏随意。" },
    { q: "雅思作文中占分更重的是：", opts: ["Task 1", "Task 2", "一样重"], a: 1, tip: "Task 2 占写作分的 2/3，建议先写。" },
    { q: "「The book ___ I bought is great.」空格应填：", opts: ["who", "that", "what"], a: 1, tip: "指物的定语从句用 that / which；who 指人。" },
    { q: "「我要一杯咖啡」最地道的说法是：", opts: ["I want a coffee.", "I'll have a coffee.", "Give me coffee."], a: 1, tip: "点单万能句：I'll have…" },
    { q: "「我对花生过敏」是：", opts: ["I like peanuts.", "I'm allergic to peanuts.", "I'm full of peanuts."], a: 1, tip: "be allergic to… 对……过敏，出国必备句。" },
    { q: "「If it rains, I ___ stay home.」正确的是：", opts: ["will", "would have", "am"], a: 0, tip: "第一条件句：if + 现在时，主句 will + 动词。" },
    { q: "「Excuse me, how do I get to the station?」是：", opts: ["问路", "点餐", "值机"], a: 0, tip: "how do I get to… = 怎么去……，万能问路句。" },
];

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);
const store = {
    get(key, def) { try { const v = localStorage.getItem("ej_" + key); return v === null ? def : JSON.parse(v); } catch { return def; } },
    set(key, val) { try { localStorage.setItem("ej_" + key, JSON.stringify(val)); } catch {} },
};

function makePhrases(elId, list) {
    const el = $(elId);
    if (!el) return;
    el.innerHTML = list.map(p =>
        `<div class="phrase-item"><span class="en">${p.en}</span><span class="cn">${p.cn}</span></div>`
    ).join("");
}

// ---------- Tabs ----------
function switchTab(name) {
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === name));
    document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + name));
    window.scrollTo({ top: 0 });
    store.set("lastTab", name);
}
document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));
document.querySelectorAll(".path-card").forEach(c => c.addEventListener("click", () => switchTab(c.dataset.jump)));

// ---------- Build static content ----------
(function build() {
    const alpha = $("alphabet");
    if (alpha) alpha.innerHTML = Object.entries(ALPHABET_SOUNDS).map(([l, s]) =>
        `<div class="letter"><b>${l} ${l.toLowerCase()}</b><span>${s}</span></div>`).join("");

    const nums = $("numbers");
    if (nums) nums.innerHTML = NUMBERS.map(n => {
        const [num, word] = n.split(" ");
        return `<div class="num"><b>${num}</b> ${word}</div>`;
    }).join("");

    const colors = $("colors");
    if (colors) colors.innerHTML = COLORS.map(([en, cn, hex]) =>
        `<div class="color-chip"><span class="color-dot" style="background:${hex}"></span>${en} ${cn}</div>`).join("");

    const verbs = $("verbs");
    if (verbs) verbs.innerHTML = VERBS.map(v => {
        const i = v.indexOf(" ");
        return `<span class="chip"><b>${v.slice(0, i)}</b> ${v.slice(i + 1)}</span>`;
    }).join("");

    const iv = $("ielts-vocab");
    if (iv) iv.innerHTML = IELTS_VOCAB.map(v => {
        const i = v.indexOf(" ");
        return `<span class="chip"><b>${v.slice(0, i)}</b> ${v.slice(i + 1)}</span>`;
    }).join("");

    const rv = $("resume-verbs");
    if (rv) rv.innerHTML = RESUME_VERBS.map(v => {
        const i = v.indexOf(" ");
        return `<span class="chip"><b>${v.slice(0, i)}</b> ${v.slice(i + 1)}</span>`;
    }).join("");

    makePhrases("greetings", GREETINGS);
    makePhrases("questions", QUESTIONS);
    makePhrases("phrasals", PHRASALS.map(p => ({ en: p.en + " — " + p.cn, cn: p.ex })));
    makePhrases("classroom", CLASSROOM);
    makePhrases("ielts-speaking", IELTS_SPEAKING);
    makePhrases("email", EMAIL);
    makePhrases("meeting", MEETING);
    makePhrases("interview", INTERVIEW);
    makePhrases("shopping", SHOPPING);
    makePhrases("restaurant", RESTAURANT);
    makePhrases("health", HEALTH);
    makePhrases("airport", AIRPORT);
    makePhrases("hotel", HOTEL);
    makePhrases("directions", DIRECTIONS);
    makePhrases("emergency", EMERGENCY);
})();

// ---------- Flashcards ----------
let fcOrder = [], fcIdx = 0, fcCat = "all";
let fcKnown = store.get("known", []);

function fcFilter() {
    let cards = FLASHCARDS.filter(c => fcCat === "all" || c.cat === fcCat);
    fcOrder = cards.map((_, i) => i);
    fcIdx = 0;
}
function fcShuffle() {
    for (let i = fcOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fcOrder[i], fcOrder[j]] = [fcOrder[j], fcOrder[i]];
    }
    fcIdx = 0;
}
function fcShow() {
    const cards = FLASHCARDS.filter(c => fcCat === "all" || c.cat === fcCat);
    if (!cards.length) return;
    const card = cards[fcOrder[fcIdx]];
    $("flashcard").classList.remove("flipped");
    $("fc-cat").textContent = card.cat;
    $("fc-word").textContent = card.w;
    $("fc-meaning").textContent = card.m;
    $("fc-example").textContent = "例句：" + card.ex;
    $("fc-progress").textContent = `第 ${fcIdx + 1} / ${fcOrder.length} 张`;
    const knownInCat = fcOrder.filter(i => fcKnown.has(cards[i].w)).length;
    $("fc-known-count").textContent = `✓ 已掌握 ${knownInCat} / ${fcOrder.length} 张`;
}
$("flashcard").addEventListener("click", () => $("flashcard").classList.toggle("flipped"));
$("fc-prev").addEventListener("click", () => { fcIdx = (fcIdx - 1 + fcOrder.length) % fcOrder.length; fcShow(); });
$("fc-next").addEventListener("click", () => { fcIdx = (fcIdx + 1) % fcOrder.length; fcShow(); });
$("fc-known").addEventListener("click", () => {
    const cards = FLASHCARDS.filter(c => fcCat === "all" || c.cat === fcCat);
    const card = cards[fcOrder[fcIdx]];
    if (!fcKnown.includes(card.w)) { fcKnown.push(card.w); store.set("known", fcKnown); }
    fcIdx = (fcIdx + 1) % fcOrder.length;
    fcShow();
});
$("fc-shuffle").addEventListener("click", () => { fcShuffle(); fcShow(); });
$("fc-reset").addEventListener("click", () => { fcFilter(); fcShow(); });
$("fc-category").addEventListener("change", (e) => { fcCat = e.target.value; fcFilter(); fcShow(); });

// ---------- Quiz ----------
let qOrder = [], qIdx = 0, qScore = 0;
function qStart() {
    qOrder = QUIZ.map((_, i) => i);
    for (let i = qOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qOrder[i], qOrder[j]] = [qOrder[j], qOrder[i]];
    }
    qIdx = 0; qScore = 0;
    $("quiz-box").classList.remove("hidden");
    $("quiz-result").classList.add("hidden");
    qShow();
}
function qShow() {
    const q = QUIZ[qOrder[qIdx]];
    $("quiz-progress").textContent = `第 ${qIdx + 1} / ${qOrder.length} 题`;
    $("quiz-question").textContent = q.q;
    $("quiz-feedback").textContent = "";
    $("quiz-feedback").className = "quiz-feedback";
    $("quiz-next").classList.add("hidden");
    const box = $("quiz-options");
    box.innerHTML = "";
    q.opts.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt";
        btn.textContent = opt;
        btn.addEventListener("click", () => {
            box.querySelectorAll(".quiz-opt").forEach(b => b.disabled = true);
            if (i === q.a) {
                btn.classList.add("correct");
                qScore++;
                $("quiz-feedback").textContent = "✓ 正确！ " + q.tip;
                $("quiz-feedback").classList.add("ok");
            } else {
                btn.classList.add("wrong");
                box.children[q.a].classList.add("correct");
                $("quiz-feedback").textContent = "✗ 再想想：" + q.tip;
                $("quiz-feedback").classList.add("no");
            }
            $("quiz-next").classList.remove("hidden");
        });
        box.appendChild(btn);
    });
}
$("quiz-next").addEventListener("click", () => {
    qIdx++;
    if (qIdx < qOrder.length) { qShow(); }
    else {
        $("quiz-box").classList.add("hidden");
        $("quiz-result").classList.remove("hidden");
        $("quiz-score").textContent = `得分：${qScore} / ${qOrder.length}`;
        const best = Math.max(qScore, store.get("bestScore", 0));
        store.set("bestScore", best);
        $("quiz-best").textContent = `历史最佳：${best} / ${qOrder.length}`;
    }
});
$("quiz-restart").addEventListener("click", qStart);

// ---------- Daily check-in 每日打卡 ----------
function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function dateStr(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
let checkins = store.get("checkins", []);

function calcStreak() {
    if (!checkins.length) return 0;
    const set = new Set(checkins);
    // 从今天（或昨天）开始往前数连续天数
    let start = set.has(todayStr()) ? 0 : -1;
    if (!set.has(todayStr()) && !set.has(dateStr(-1))) return 0;
    let streak = 0, i = set.has(todayStr()) ? 0 : -1;
    while (set.has(dateStr(i))) { streak++; i--; }
    return streak;
}
function renderCheckin() {
    const done = checkins.includes(todayStr());
    $("streak-num").textContent = calcStreak();
    const info = $("checkin-info");
    info.textContent = done ? "✓ 今天已打卡，明天继续！" : "今天还没打卡";
    info.classList.toggle("done", done);
    const btn = $("checkin-btn");
    btn.textContent = done ? "✓ 已打卡" : "✓ 今日打卡";
    btn.disabled = done;
    btn.style.opacity = done ? ".55" : "1";
    // 最近 7 天
    const names = ["日", "一", "二", "三", "四", "五", "六"];
    const set = new Set(checkins);
    let html = "";
    for (let i = -6; i <= 0; i++) {
        const ds = dateStr(i);
        const wd = new Date(ds + "T12:00:00").getDay();
        html += `<div class="week-day ${set.has(ds) ? "hit" : ""} ${i === 0 ? "today" : ""}">${names[wd]}</div>`;
    }
    $("week-row").innerHTML = html;
    $("checkin-total").textContent = `累计打卡 ${checkins.length} 天`;
}
$("checkin-btn").addEventListener("click", () => {
    const t = todayStr();
    if (!checkins.includes(t)) {
        checkins.push(t);
        store.set("checkins", checkins);
    }
    renderCheckin();
});

// ---------- Word of the day 今日单词 ----------
let dailyIdx = null;
function renderDailyWord(idx) {
    const card = FLASHCARDS[idx];
    $("daily-word").textContent = card.w;
    $("daily-meaning").textContent = card.m;
    $("daily-example").textContent = "例句：" + card.ex;
}
(function initDailyWord() {
    // 按日期轮换，每天固定一个词
    const dayNum = Math.floor(Date.now() / 86400000);
    dailyIdx = dayNum % FLASHCARDS.length;
    renderDailyWord(dailyIdx);
})();
$("word-next").addEventListener("click", () => {
    dailyIdx = (dailyIdx + 1) % FLASHCARDS.length;
    renderDailyWord(dailyIdx);
});

// ---------- Init ----------
fcFilter();
fcShow();
qStart();
renderCheckin();
const last = store.get("lastTab", "home");
switchTab(last);
