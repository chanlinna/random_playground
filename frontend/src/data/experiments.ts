export interface Experiment {
  icon: string;
  label: string;
  title: string;
  desc: string;
  theme: "" | "red" | "mustard" | "teal";
  category: "discover" | "generators" | "decisions" | "wildcard";
  available: boolean;
  path?: string;
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "discover", label: "Discover" },
  { id: "generators", label: "Generators" },
  { id: "decisions", label: "Decisions" },
  { id: "wildcard", label: "Wildcard" },
];

export const EXPERIMENTS: Experiment[] = [
  { icon: "🌎", label: "Mysterious · discovery", title: "Find Your Country", desc: "Which fictional country actually feels like you?", theme: "teal", category: "discover", available: true, path: "/find-your-country" },
  { icon: "🎲", label: "Unpredictable", title: "Random Generator", desc: "Press a button. Receive a strange little task.", theme: "mustard", category: "generators", available: false },
  { icon: "🧠", label: "Absurd", title: "Ridiculous Decisions", desc: "Absurd hypotheticals. Pick a side. See who agrees.", theme: "red", category: "decisions", available: false },
  { icon: "📏", label: "Visual scale", title: "How Big Is It?", desc: "Bacteria to skyscrapers to Earth. Scroll and gawk.", theme: "", category: "discover", available: false },
  { icon: "🤖", label: "No context given", title: "Talk to a Random Character", desc: "A stranger with strong opinions and zero backstory.", theme: "teal", category: "wildcard", available: false },
  { icon: "🥔", label: "Ridiculous · chaotic", title: "Argue With a Potato", desc: "Defend your position. The potato is not convinced.", theme: "mustard", category: "wildcard", available: false },
  { icon: "💬", label: "Weirdly specific", title: "Compliment Generator", desc: "Oddly precise praise, generated on demand.", theme: "", category: "generators", available: false },
  { icon: "🏭", label: "Solving nothing", title: "Generate a Terrible Invention", desc: "Solving problems nobody has. Badly.", theme: "red", category: "generators", available: false },
  { icon: "📦", label: "As seen nowhere", title: "Generate a Fake Product", desc: "As seen on an infomercial that doesn't exist.", theme: "teal", category: "generators", available: false },
  { icon: "🏳️", label: "One wasn't enough", title: "Generate a Fake Country", desc: "Because one fictional nation clearly wasn't enough.", theme: "mustard", category: "generators", available: false },
  { icon: "📜", label: "Technically binding", title: "Generate a Fake Law", desc: "Legally binding. Technically. In no country.", theme: "", category: "generators", available: false },
  { icon: "📖", label: "Citation needed", title: "Generate a Fake Wikipedia Article", desc: "Citation needed. Badly needed.", theme: "red", category: "generators", available: false },
  { icon: "🪑", label: "Deeply unnecessary", title: "What Kind of Chair Are You?", desc: "A personality test nobody asked for.", theme: "teal", category: "decisions", available: false },
  { icon: "🔘", label: "We're not saying", title: "The Button That Does Something", desc: "We won't say what. Just press it.", theme: "mustard", category: "wildcard", available: false },
  { icon: "❓", label: "Exactly that", title: "Absolutely Nothing", desc: "Exactly what it sounds like. Try it anyway.", theme: "", category: "wildcard", available: false },
  { icon: "🎭", label: "Has opinions", title: "The Website That Judges Your Decisions", desc: "It has thoughts about your life choices.", theme: "red", category: "decisions", available: false },
  { icon: "🌀", label: "Going nowhere", title: "Pointless Mode", desc: "A whole mode dedicated to going nowhere.", theme: "teal", category: "wildcard", available: false },
];