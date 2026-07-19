export type WisdomBranch =
  | "lens"
  | "connection"
  | "character"
  | "building"
  | "becoming";

export type WisdomChapterData = {
  id: string;
  title: string;
  contribution: number;
  cumulativeProgress: number;
  shortTitle?: string;
  keyLine: string;
  shortReflection: string;
  takeawayWords: string[];
  branch: WisdomBranch;
  /** Approved, full original reflection. This remains the source of truth. */
  text: string;
  /** Reserved for the manually approved enhanced reading layer. */
  compressedText?: string;
  /** Reserved for a manually approved one-sentence insight. */
  keyInsight?: string;
  /** Reserved for a manually approved practical takeaway. */
  takeaway?: string;
  audioSrc: string;
  imageSrc: string;
};

export const WISDOM_TOTAL_PERCENT = 21;

export const WISDOM_ROOT_LABELS: Record<WisdomBranch, string> = {
  lens: "How I See",
  connection: "How I Connect",
  character: "What Grounds Me",
  building: "What I Build",
  becoming: "Who I’m Becoming"
};

export const wisdomPrologue = `My name is Edmond Ilbawi.

I am 21 years old, and I am a Computer Science student at the University of Balamand.

This section was not created because a client asked for it. It was created intentionally, because I wanted this website to show more than my projects, skills, and professional background.

A portfolio can show what I build.

But it cannot always show how I think, what shaped me, what I value, or what kind of person I am becoming.

That is why 21% Loaded exists.

It is not a claim that I am wise. It is the opposite. It is a reminder that I am still early in the process, still learning, still adjusting, and still becoming.

Each chapter represents a trait, lesson, or perspective that added something to my growth by the age of 21.

Some lessons shaped me more than others. Some are still being developed. But together, they form the first 21% of my wisdom bar.

This is not the full story.

It is only what has loaded so far.`;

export const wisdomOutro = `At the end of these 21 chapters, the bar reaches 21%.

But it does not mean the story is complete.

It means that by this age, these are the lessons, traits, and experiences that have shaped the way I think so far.

Some came from people.
Some came from mistakes.
Some came from pressure.
Some came from observation.
Some are still being built.

That is the point.

This website is not about presenting a perfect version of myself. It is about being honest enough to show the version that is still loading.

At 21, I do not want to pretend that I have everything figured out. I want to keep learning, keep listening, keep building, and keep becoming.

Because wisdom is not a full bar.

Wisdom is knowing that the bar is still moving.

21% loaded.

Not complete.

Still becoming.`;

export const wisdomChapters: WisdomChapterData[] = [
  {
    id: "01",
    title: "Perspective, Growth & Flexibility",
    contribution: 1.5,
    cumulativeProgress: 1.5,
    shortTitle: "Perspective",
    keyLine: "Perspective taught me that my view is not the whole reality.",
    shortReflection:
      "I learned that growth begins when I stop treating my own perspective as the only truth. In ENGL 265, and through my father’s advice, I started seeing the value of listening to people with more experience and learning from their mistakes before making every mistake myself. Flexibility does not mean losing who I am. It means being open enough to improve how I think.",
    takeawayWords: [
      "Perspective",
      "Flexibility",
      "Listening",
      "Growth",
      "Experience"
    ],
    branch: "lens",
    text: `There is a quote I carry with me, often attributed to Friedrich Nietzsche:

“The most dangerous form of blindness is believing that your perspective is the only reality.”

For me, perspective became more than an idea. It became a way of growing.

In ENGL 265, with my instructor Amani Al Charrif, I learned more about perspectivism and how reality can change depending on the angle from which it is understood. That idea stayed with me because it connected to something I had already been learning in life.

Growing up, my father always pushed me to listen to people with more experience, understand their reasoning, and learn from their mistakes instead of waiting to make every mistake myself.

That is where flexibility began for me.

Flexibility does not mean changing who I am. It means being open enough to improve how I think. It means pausing before judging, listening before deciding, and allowing another point of view to challenge my own.

Without perspective, I would only grow through my own mistakes. With perspective, I can grow through the experiences of others.

That is why this chapter adds 1.5% to my wisdom bar.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "02",
    title: "Personal Relations & Network",
    contribution: 1,
    cumulativeProgress: 2.5,
    shortTitle: "Network",
    keyLine:
      "A real network is not just contacts. It is an environment that helps me grow.",
    shortReflection:
      "Personal relations taught me that growth is shaped by the people I listen to, learn from, and choose to grow beside. Every person carries a different point of view, lesson, or opportunity. Being an active listener helps me understand people better and recognize where I can learn, contribute, or improve.",
    takeawayWords: [
      "Relationships",
      "Listening",
      "Network",
      "Opportunity",
      "Growth"
    ],
    branch: "connection",
    text: `Personal relations and network are not only about knowing people.

They are about understanding who I am willing to learn beside, who I can listen to, and who I can build meaningful connections with through opportunities, conversations, and shared experiences.

Every person carries something different. Some people bring support. Some bring knowledge. Some bring opportunity. Others may only pass through life for a short time, but still leave behind a lesson.

That is why I try to be an active listener.

Not just to hear what someone is saying, but to understand where they are coming from, what they need, what they value, and where I may be able to contribute.

Being around people who are older, wiser, or more experienced made me more eager to improve. Their stories opened my mind to possibilities I had not seen yet, and their experiences gave me perspectives I could not have reached alone.

A real network is not just a list of contacts. It is an environment that helps you learn, develop, and become better. Every contact has value, because every person carries a point of view that can teach you something.

This chapter adds 1% to my wisdom bar because it taught me that progress is not built alone. It is shaped by the people we listen to, learn from, and choose to keep around us.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "03",
    title: "Communication",
    contribution: 1,
    cumulativeProgress: 3.5,
    shortTitle: "Communication",
    keyLine: "Communication begins before the words leave my mouth.",
    shortReflection:
      "I learned that being understood is not only about speaking. It is about organizing my thoughts, choosing the right words, and making sure my message can actually be received. Many conflicts do not come from bad intentions, but from unclear words or rushed reactions. Clarity protects relationships.",
    takeawayWords: [
      "Clarity",
      "Listening",
      "Timing",
      "Understanding",
      "Connection"
    ],
    branch: "connection",
    text: `Communication is the bridge between what we think and what others understand.

I used to see communication as simply expressing myself, but with time I realized that speaking is only one part of it. Real communication begins before the words leave your mouth.

It begins in the pause.

The moment where you organize your thoughts, understand what you are trying to say, and choose the clearest way to say it.

In everyday life, communication is easy to overlook because it feels automatic. But many conflicts do not begin from bad intentions. They begin from unclear words, rushed reactions, or messages that were never properly delivered.

Experience taught me that being understood is not only about saying what is on my mind. It is about saying it in a way the other person can truly receive.

After listening, I try to think before speaking. Not to filter who I am, but to make sure the message does not get lost between intention and interpretation.

This chapter adds 1% to my wisdom bar because it taught me that clarity can protect relationships, prevent misunderstandings, and turn thoughts into connection.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "04",
    title: "Emotional Intelligence",
    contribution: 1,
    cumulativeProgress: 4.5,
    shortTitle: "Emotional Intelligence",
    keyLine:
      "Emotional intelligence is the space between feeling and reacting.",
    shortReflection:
      "I learned that emotions should be understood before they lead my actions. Sometimes emotion makes a situation feel bigger than it is, and sometimes the heart becomes louder than the truth. Emotional intelligence helps me pause, separate feeling from reaction, and decide when the heart should be heard and when the mind should take control.",
    takeawayWords: ["Awareness", "Pause", "Control", "Emotion", "Maturity"],
    branch: "character",
    text: `Emotional intelligence is the moment between feeling something and choosing what to do with it.

It begins with awareness. Awareness of what I am feeling, what phase I am in, and what emotions are present in the room before I decide how to act.

At first, this was not something I naturally understood. I had to learn it through experience, especially in moments where my emotions started interfering with my choices. Sometimes emotion makes a situation feel bigger than it is. Sometimes it pushes us to react before we understand. And sometimes, if we are not careful, it can make the heart louder than the truth.

With time, I started learning how to separate feeling from reaction.

That does not mean ignoring emotion. It means taking the time to understand what I feel before allowing it to guide my response.

I learned that there are moments where the heart should be heard, and moments where the mind has to take control. Maturity is knowing the difference.

This chapter adds 1% to my wisdom bar because it taught me that emotional intelligence is not about feeling less. It is about understanding more before acting.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "05",
    title: "Adaptability",
    contribution: 1,
    cumulativeProgress: 5.5,
    shortTitle: "Adaptability",
    keyLine: "Adaptability is adjusting to life without losing myself.",
    shortReflection:
      "Adaptability taught me how to enter new environments while staying loyal to the principles that define me. I learned that changing with the room can become dangerous if it means losing character. Real adaptation is not becoming someone else. It is learning how to move through change while remaining recognizable to myself.",
    takeawayWords: [
      "Change",
      "Identity",
      "Balance",
      "Flexibility",
      "Principles"
    ],
    branch: "becoming",
    text: `Adaptability is the ability to enter a new environment without losing yourself inside it.

Life places us in different rooms, around different people, and in situations we cannot always predict. In each one, we are expected to adjust, understand the atmosphere, and find our place. But for me, adaptability was never about becoming whoever the environment wants me to be.

It was about learning how to blend in while still carrying the principles that define me.

I understood this more clearly by observing people who changed completely depending on where they were and who they were around. Their character shifted with the room. Their values became flexible in the wrong way. Seeing that taught me that adaptation without identity can become dangerous.

A person should be flexible enough to grow, but grounded enough to remain recognizable to himself.

Adaptability taught me how to move through change without being controlled by it.

This chapter adds 1% to my wisdom bar because it taught me that real adaptation is not changing character. It is adjusting to life while staying loyal to who you are.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "06",
    title: "Curiosity",
    contribution: 1,
    cumulativeProgress: 6.5,
    shortTitle: "Curiosity",
    keyLine: "Curiosity keeps me moving, but humility keeps me grounded.",
    shortReflection:
      "Curiosity is what pushes me to ask questions, explore ideas, and invest in myself. The more I learn, the more I realize how much I still do not know. That is why curiosity is connected to humility. It gives me momentum without letting me believe I am complete.",
    takeawayWords: [
      "Questions",
      "Discovery",
      "Humility",
      "Learning",
      "Momentum"
    ],
    branch: "lens",
    text: `Curiosity is the quiet feeling that there is still more to discover.

It is the eagerness to learn, grow, build my character, and invest more in myself. It is what pushes me to ask questions, explore ideas, and look beyond what I already know.

I became more curious when I started seeing the results of self-investment. Every time I learned something new, improved a skill, or understood life from a deeper angle, I realized that growth creates momentum. The more I grew, the more I wanted to grow.

But curiosity also gave me humility.

Because the more I learned, the more I realized how much I still did not know. It reminded me that knowledge does not make a person complete. It only reveals how much more there is to understand.

That is why curiosity is not only about ambition. It is also about humility.

It keeps me moving forward, but it also keeps me grounded.

This chapter adds 1% to my wisdom bar because it taught me that growth begins with wanting to know more, and wisdom begins with knowing that I still know very little.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "07",
    title: "Discipline",
    contribution: 1,
    cumulativeProgress: 7.5,
    shortTitle: "Discipline",
    keyLine: "Discipline is choosing growth when comfort feels easier.",
    shortReflection:
      "I do not see discipline as something I have mastered. I see it as something I am building through repeated choices. It shows up when motivation fades, when comfort feels easier, and when progress is slow. Discipline matters because the version of myself I want to become depends on what I repeatedly choose.",
    takeawayWords: [
      "Consistency",
      "Comfort",
      "Choice",
      "Effort",
      "Growth"
    ],
    branch: "character",
    text: `Discipline is the promise I make to the version of myself I am trying to become.

I do not see discipline as something I have fully mastered. I see it as something I am currently building, one choice at a time.

Discipline is not only about working hard. It is about learning how to control comfort before comfort controls me. Comfort can feel safe, but if I stay inside it for too long, it can quietly keep me in the same place.

That is why discipline matters.

It reminds me that growth usually asks for something uncomfortable: effort when I feel tired, patience when results are slow, and commitment when motivation fades.

I see discipline as self-respect, not punishment. It is a way of telling my future self that I did not forget about him.

This chapter adds 1% to my wisdom bar because it taught me that becoming better is not built only by what I want, but by what I repeatedly choose.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "08",
    title: "Learning Ability",
    contribution: 1,
    cumulativeProgress: 8.5,
    shortTitle: "Learning Ability",
    keyLine:
      "Not knowing something does not make me incapable. It shows me what needs to be built.",
    shortReflection:
      "Learning ability is the skill of adapting when I do not have all the answers yet. Every new project or challenge reminds me that I may need to ask, search, fail, try again, and rebuild my understanding. Being a beginner can feel uncomfortable, but it is also where growth starts.",
    takeawayWords: [
      "Adaptation",
      "Beginner",
      "Practice",
      "Understanding",
      "Growth"
    ],
    branch: "becoming",
    text: `Learning ability is the skill of adapting when I realize I do not know enough yet.

To me, learning is not only about intelligence. It is about how willing I am to adjust when I enter a new situation without all the answers.

This is something I am still developing.

Every new project, environment, or challenge reminds me that I will not always begin prepared. Sometimes I have to ask, search, fail, try again, and rebuild my understanding from the beginning.

At first, being a beginner can feel uncomfortable. But I started to understand that not knowing something does not make me incapable. It only shows me which part of myself still needs to be built.

In computer science, and in life, the strongest person is not always the one who already has the answer. Sometimes, it is the one who is willing to learn fast enough to reach it.

This chapter adds 1% to my wisdom bar because it taught me that growth begins when I stop fearing what I do not know.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "09",
    title: "Integrity",
    contribution: 1,
    cumulativeProgress: 9.5,
    shortTitle: "Integrity",
    keyLine:
      "Integrity is the distance between what I say I believe and how I act.",
    shortReflection:
      "Integrity taught me that character is not only about having values. It is about trying to live close to them, especially when nobody is watching. Words can explain who I want to be, but actions reveal who I am becoming. Trust is built through consistency between what I say, choose, and do.",
    takeawayWords: [
      "Values",
      "Actions",
      "Trust",
      "Consistency",
      "Character"
    ],
    branch: "character",
    text: `Integrity is the distance between what I say I believe and how I actually act.

Integrity is not only about creating a good image in front of people. It is about trying to make sure my actions stay close to my values, even in the moments where nobody is watching closely.

I do not see integrity as something a person proves once. I see it as something that has to be practiced repeatedly.

Words can explain who we want to be, but actions reveal who we are becoming.

That is why integrity matters. It protects the connection between my principles and my behavior. It reminds me that trust is built slowly, through consistency between what a person says, chooses, and does.

I am still learning how to keep that alignment strong in every area of life.

This chapter adds 1% to my wisdom bar because it taught me that character is not only about having values. It is about trying to live close to them.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "10",
    title: "Consistency",
    contribution: 1,
    cumulativeProgress: 10.5,
    shortTitle: "Consistency",
    keyLine: "Consistency is continuing when results are not visible yet.",
    shortReflection:
      "I used to think progress had to feel obvious, but I learned that some growth happens quietly. Consistency is built on the days when motivation is low and nobody is watching. It is not always about intensity or speed. Sometimes growth is simply returning to the same goal again.",
    takeawayWords: [
      "Repetition",
      "Patience",
      "Progress",
      "Commitment",
      "Growth"
    ],
    branch: "character",
    text: `Consistency is learning how to continue when results are not yet visible.

Consistency is not built in the moments where everything feels easy. It is built in the quiet days, when the progress is slow, the motivation is low, and nobody is really watching whether you continue or stop.

I used to think growth had to feel obvious. Like every effort should immediately show a result. But with time, I started understanding that some progress happens silently. Some parts of who we become are shaped in repetition before they are ever seen by others.

That is why consistency matters to me.

It teaches patience without asking me to stand still. It reminds me that becoming better is not always about intensity, speed, or one powerful moment. Sometimes, it is about returning to the same goal again and again, even when the reward has not arrived yet.

Consistency is something I am still building. But I am learning that what I repeat eventually starts to represent me.

This chapter adds 1% to my wisdom bar because it taught me that growth is not always loud. Sometimes, it is built quietly by showing up again.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "11",
    title: "Problem Solving",
    contribution: 1,
    cumulativeProgress: 11.5,
    shortTitle: "Problem Solving",
    keyLine: "Computer Science taught me to break complexity into pieces.",
    shortReflection:
      "Problem solving is one of the clearest ways my major shaped how I think. A difficult problem becomes less powerful when I stop seeing it as one impossible wall and start breaking it down. I try to find structure, dependencies, and the part I do not understand yet. That mindset helps in code, work, and life.",
    takeawayWords: [
      "Structure",
      "Logic",
      "Complexity",
      "Breakdown",
      "Solutions"
    ],
    branch: "building",
    text: `Problem solving is one of the clearest ways my major shaped the way I think.

As a Computer Science student, I learned that the real value of my education is not only in memorizing a course, a chapter, or a specific subject. Those details matter, but they are not always what stays forever.

What stays is the way the mind changes.

Computer Science trained me to look at complexity differently. It taught me that a large problem is rarely solved by staring at it as one impossible wall. It has to be broken down, understood, tested, and rebuilt piece by piece.

That way of thinking changed how I approach challenges.

When something feels difficult, I try to search for its structure. What is the real issue? What depends on what? What can be solved first? What part am I misunderstanding?

This is not only useful in code. It applies to life, work, decisions, and the way I face pressure.

This chapter adds 1% to my wisdom bar because it taught me that problems become less powerful when I learn how to divide them, understand them, and face them one part at a time.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "12",
    title: "Decision Making",
    contribution: 1,
    cumulativeProgress: 12.5,
    shortTitle: "Decision Making",
    keyLine: "Every repeated decision slowly shapes who I become.",
    shortReflection:
      "Decision making taught me that choices are not isolated moments. They create direction. Some decisions need emotion because the heart recognizes meaning. Others need reason because the mind protects me from choosing too fast. The challenge is knowing which side should lead.",
    takeawayWords: ["Direction", "Choice", "Reason", "Emotion", "Future"],
    branch: "lens",
    text: `Decision making is where the heart, the mind, and the future meet.

Every decision carries more than one question. What do I want? What makes sense? What is right? What will this choice create later? Sometimes the answer is clear, but other times, the heart and the mind stand on opposite sides of the same moment.

I learned that decision making is not only about choosing quickly or confidently. It is about understanding the weight of a choice before carrying it forward.

Some decisions need emotion, because the heart can recognize meaning before logic can explain it. Other decisions need reason, because the mind can protect me from what emotion wants too fast.

With time, I started seeing decisions as more than isolated moments. They are small turning points. Each one carries a direction, and each direction slowly shapes identity.

The choices I make repeatedly do not only affect what happens to me. They affect who I become.

This chapter adds 1% to my wisdom bar because it taught me that making decisions is not only about choosing a path. It is about choosing the version of myself that path creates.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "13",
    title: "Patience",
    contribution: 1,
    cumulativeProgress: 13.5,
    shortTitle: "Patience",
    keyLine: "Patience is waiting without standing still.",
    shortReflection:
      "Patience taught me to respect timing without becoming passive. Not every delay is failure, and not every slow season is wasted. Sometimes what feels like waiting is actually preparation. I am learning how to stay ambitious without forcing everything before its time.",
    takeawayWords: [
      "Timing",
      "Preparation",
      "Ambition",
      "Waiting",
      "Progress"
    ],
    branch: "character",
    text: `Patience is learning how to wait without standing still.

Patience is not the absence of ambition. It is the ability to keep moving while understanding that some things need time before they reveal their value.

There were moments where I wanted life to move faster. I wanted answers before the lesson was complete, results before the process had shaped me, and progress before I had fully earned it. But with time, I started realizing that rushing can sometimes damage what patience is trying to build.

Patience taught me to respect timing.

Not every delay is failure. Not every slow season is wasted. Sometimes, what feels like waiting is actually preparation. Sometimes, life is not denying the result, but building the person who will be able to carry it.

I am still learning how to be patient without becoming passive, and how to stay ambitious without forcing everything before its time.

This chapter adds 1% to my wisdom bar because it taught me that patience is not the opposite of progress. It is the strength to keep going while allowing life to unfold at the right time.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "14",
    title: "Financial Literacy",
    contribution: 0.75,
    cumulativeProgress: 14.25,
    shortTitle: "Financial Literacy",
    keyLine:
      "Understanding money creates options. Chasing money blindly creates control.",
    shortReflection:
      "Financial literacy taught me that money is not only a number. It carries responsibility, risk, freedom, and direction. What I save, spend, risk, and prioritize all say something about the future I am preparing for. Money should not define character, but understanding it can protect the future I am trying to build.",
    takeawayWords: [
      "Value",
      "Risk",
      "Freedom",
      "Responsibility",
      "Future"
    ],
    branch: "connection",
    text: `Financial literacy is not only about money.

To me, it is about understanding value, responsibility, risk, and freedom. Money can be spent quickly, chased blindly, or misunderstood completely. But when it is understood properly, it becomes more than a number. It becomes a tool for independence, stability, and choice.

I started seeing money differently when I realized that every financial decision carries a direction. What we save, what we spend, what we risk, and what we prioritize all say something about the future we are preparing for.

Financial literacy taught me that wanting money is not the same as understanding money.

Wanting money without awareness can make a person controlled by it. Understanding money gives a person the ability to use it with purpose. It creates options, protects freedom, and teaches long-term thinking.

I am still learning this part of life, but I know that financial maturity is connected to responsibility.

This chapter adds 0.75% to my wisdom bar because it taught me that money should not define character, but understanding money can protect the future a person is trying to build.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "15",
    title: "Systems Thinking",
    contribution: 1,
    cumulativeProgress: 15.25,
    shortTitle: "Systems Thinking",
    keyLine: "Most problems are connected to something deeper underneath.",
    shortReflection:
      "Systems thinking taught me to look beyond isolated parts. In code, one small change can affect an entire system. Over time, I started applying that thinking to people, business, and decisions. Instead of asking only what happened, I ask what caused it, what it affects, and what part of the system I am missing.",
    takeawayWords: [
      "Connections",
      "Systems",
      "Cause",
      "Complexity",
      "Awareness"
    ],
    branch: "building",
    text: `Systems thinking is the ability to see the connections behind what appears separate.

It is the understanding that most problems do not exist alone. One decision affects another. One small change can shift the entire outcome. What appears simple on the surface is often connected to something deeper underneath.

Computer Science helped me understand this clearly.

In code, every part depends on another part. A small mistake in one place can create an error somewhere completely different. A strong system is not built by only looking at one piece. It is built by understanding how all the pieces interact together.

Over time, that way of thinking moved beyond technology.

I started applying it to people, business, decisions, and life. I began asking different questions. What caused this? What is connected to it? What will it affect next? What part of the system am I not seeing?

Systems thinking taught me to respect complexity instead of simplifying everything too quickly.

This chapter adds 1% to my wisdom bar because it taught me that deeper understanding begins when I stop looking at things separately and start seeing how they influence one another.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "16",
    title: "Negotiation",
    contribution: 0.75,
    cumulativeProgress: 16,
    shortTitle: "Negotiation",
    keyLine:
      "Negotiation is not about taking more. It is about understanding value.",
    shortReflection:
      "Negotiation taught me that confidence and respect have to exist together. Before asking for something, I need to understand what matters to the other side. A good negotiation is not pressure or manipulation. It is creating enough understanding for both sides to move forward.",
    takeawayWords: [
      "Value",
      "Respect",
      "Confidence",
      "Listening",
      "Agreement"
    ],
    branch: "connection",
    text: `Negotiation is not only about winning.

Negotiation is the ability to understand value, communicate it clearly, and recognize what the other side needs before trying to reach an outcome.

I learned that a good negotiation does not begin with pressure. It begins with listening. Before asking for something, I have to understand what matters to the person in front of me. What do they want? What are they afraid of losing? What would make the solution feel fair?

Negotiation taught me that confidence and respect must exist together.

Confidence without respect can become arrogance. Respect without confidence can make a person lose his voice. The balance is knowing the value I bring while still understanding the value of the other side.

It is not manipulation. It is not forcing someone to agree. It is the ability to create a space where both sides feel understood enough to move forward.

This chapter adds 0.75% to my wisdom bar because it taught me that negotiation is not about taking more. It is about understanding value well enough to reach better decisions.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "17",
    title: "Technical Competence",
    contribution: 1,
    cumulativeProgress: 17,
    shortTitle: "Technical Competence",
    keyLine:
      "Technical competence is turning understanding into something that works.",
    shortReflection:
      "As a Computer Science student, I know I am still at the beginning. Technical competence is not only writing code that runs. It is understanding why something works, how parts connect, and what to do when something fails. Mistakes, bugs, and failed attempts are part of learning how to build honestly.",
    takeawayWords: [
      "Code",
      "Understanding",
      "Building",
      "Errors",
      "Competence"
    ],
    branch: "building",
    text: `Technical competence is the ability to turn understanding into something that works.

As a Computer Science student, I know I am still at the beginning. There is still a lot I have to learn, build, break, fix, and understand. But that is exactly what makes this chapter important to me.

Technical competence is not only about knowing tools or writing code that runs. It is about understanding why something works, how different parts connect, and what needs to happen when something fails.

In technology, mistakes are part of the process. Errors, bugs, and failed attempts are not always signs of weakness. Sometimes, they are the path that teaches you how to think more clearly.

I am learning that being technically competent means being patient with complexity. It means not running away when the system does not work the first time.

It also means turning ideas into structure.

This chapter adds 1% to my wisdom bar because it taught me that competence is not about pretending to know everything. It is about building the ability to learn, solve, and create with honesty.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "18",
    title: "Resilience",
    contribution: 1,
    cumulativeProgress: 18,
    shortTitle: "Resilience",
    keyLine:
      "Resilience is being affected and still finding a way to continue.",
    shortReflection:
      "Resilience does not mean pretending nothing hurts. It means difficulty does not get to become the end of the story. Plans fail, people disappoint, and results do not always arrive quickly. I am learning that strength is sometimes quiet: trying again with more awareness than before.",
    takeawayWords: [
      "Strength",
      "Pressure",
      "Recovery",
      "Awareness",
      "Continuing"
    ],
    branch: "becoming",
    text: `Resilience is not pretending that nothing affects me.

It is the ability to be affected by something and still find a way to continue.

Resilience does not mean being unbreakable. I do not think growth requires a person to act like pressure, failure, or disappointment never hurts. Real resilience begins when something does hurt, but does not become the end of the story.

There are moments in life where plans do not move the way we expected. Effort does not always lead to immediate results. People disappoint us. Opportunities may not arrive when we want them. And sometimes, the hardest part is not the problem itself, but the need to keep moving while carrying its weight.

I am still learning resilience.

I am learning that strength is not always loud. Sometimes, it is quiet. Sometimes, it is simply choosing to try again with a little more awareness than before.

This chapter adds 1% to my wisdom bar because it taught me that difficulty does not automatically build character. What builds character is how we choose to rise after it.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "19",
    title: "Humility",
    contribution: 1,
    cumulativeProgress: 19,
    shortTitle: "Humility",
    keyLine: "Growth becomes dangerous when it loses humility.",
    shortReflection:
      "Humility taught me that confidence and awareness must stay balanced. Confidence helps me move forward, but humility reminds me that there is always more to learn. Being corrected is not always an attack. Sometimes it is a mirror showing me what still needs attention.",
    takeawayWords: [
      "Confidence",
      "Awareness",
      "Learning",
      "Correction",
      "Growth"
    ],
    branch: "character",
    text: `Humility is the ability to grow without allowing growth to turn into ego.

Humility does not mean thinking less of myself. It means understanding that no matter how much I learn, achieve, or improve, there will always be more that I do not know.

It is the balance between confidence and awareness.

Confidence allows me to move forward, speak, build, and take opportunities. But humility reminds me to stay grounded while doing it. It reminds me that I can be ambitious without acting like I am above learning from others.

There were moments where I realized that being corrected is not an attack. Sometimes, criticism is a mirror. It shows me a part of myself, my thinking, or my work that still needs attention.

I am still learning how to receive that mirror without defending myself too quickly.

Humility teaches me to listen even when I think I already understand. It teaches me to respect people who know more than me, and to stay open to lessons that can come from anyone.

This chapter adds 1% to my wisdom bar because it taught me that growth becomes dangerous when it loses humility. The more I become, the more important it is to remember that I am still becoming.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "20",
    title: "Strategic Thinking",
    contribution: 1,
    cumulativeProgress: 20,
    shortTitle: "Strategic Thinking",
    keyLine:
      "Strategy is making sure today’s actions fit tomorrow’s direction.",
    shortReflection:
      "Strategic thinking taught me not every opportunity belongs to my path. Some decisions feel good in the moment but move me away from what matters later. I am learning to ask where a choice is taking me, not only what it gives me now. Strategy keeps me from moving randomly.",
    takeawayWords: [
      "Direction",
      "Purpose",
      "Choices",
      "Future",
      "Focus"
    ],
    branch: "lens",
    text: `Strategic thinking is the ability to look beyond the moment before choosing how to move.

Strategy is not only about planning. It is about understanding direction. It means asking whether the decision in front of me fits the person I am trying to become, or whether it only satisfies something temporary.

Not every opportunity belongs to my path. Not every open door should be entered. Sometimes, strategic thinking means knowing when to move forward, when to wait, and when to say no.

I started understanding that small decisions can carry long shadows.

The way I spend my time, the people I choose to grow around, the skills I build, and the risks I take all connect to a larger future. If I only think about what feels good now, I may lose sight of what matters later.

Strategic thinking helps me connect today’s actions to tomorrow’s vision.

It keeps me from moving randomly. It teaches me to act with purpose, not just reaction.

This chapter adds 1% to my wisdom bar because it taught me that life is not only about making moves. It is about understanding where those moves are taking me.`,
    audioSrc: "",
    imageSrc: ""
  },
  {
    id: "21",
    title: "Wisdom",
    contribution: 1,
    cumulativeProgress: 21,
    shortTitle: "Wisdom",
    keyLine:
      "Wisdom is not pretending the bar is full. It is knowing it is still loading.",
    shortReflection:
      "At 21, I do not see wisdom as something I have reached. I see it as awareness: of what shaped me, what I still need to learn, and how much of life I have not yet understood. These reflections are not proof that I am complete. They are proof that I am paying attention.",
    takeawayWords: [
      "Awareness",
      "Growth",
      "Loading",
      "Reflection",
      "Becoming"
    ],
    branch: "becoming",
    text: `Wisdom is not the same as knowing everything.

At 21, I do not see wisdom as a destination I have reached. I see it as awareness. Awareness of what shaped me, what I still need to learn, and how much of life I have not yet understood.

These chapters are not proof that I am complete.

They are proof that I am paying attention.

Every lesson before this one gave me something different. Perspective taught me to see beyond myself. Relationships taught me to listen. Discipline taught me to choose growth. Resilience taught me to continue. Humility taught me to stay grounded. Strategic thinking taught me to move with direction.

Together, they do not make me fully wise.

They make me 21% loaded.

And maybe that is the real message of this website. Wisdom is not about pretending the bar is full. It is about being honest enough to know that it is still loading.

This chapter adds the final 1% to my wisdom bar because it taught me that becoming wiser begins with admitting that I am still becoming.`,
    audioSrc: "",
    imageSrc: ""
  }
];
