# The Weight of Certainty

An interactive exploration of how beliefs constrain freedom. This game demonstrates how accumulating certainties - about ourselves, others, and the world - reduces our degrees of freedom to move, think, and see clearly.

![The Weight of Certainty](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎮 Concept

Every belief we hold acts as a constraint, literally tethering us in place. As beliefs accumulate:
- Movement becomes slower and more restricted
- Control becomes harder
- Freedom to explore decreases
- Similar beliefs cluster together
- Opposing beliefs push apart

This creates a visual metaphor for how our mental models shape and limit our reality.

## ✨ Features

- **Interactive Physics Simulation**: Beliefs interact with each other through attraction and repulsion forces
- **Dynamic Clustering**: Similar beliefs (same category) cluster together automatically
- **Opposition Mechanics**: Contradictory beliefs actively repel each other
- **Cluster Management**: Drag entire clusters to arrange them, lock them in place
- **Custom Beliefs**: Create your own beliefs and categorize them
- **Visual Feedback**: Color-coded categories, lock indicators, hover states
- **Degrees of Freedom**: Watch your movement range decrease as beliefs accumulate

## 🎯 How to Play

### Controls
- **SPACEBAR** - Add a random belief
- **C** - Open custom belief creator
- **Arrow Keys / WASD** - Move yourself (player)
- **Drag YOU** - Click and drag the blue player circle
- **Drag Belief** - Click and drag to move entire cluster (auto-locks on release)
- **Click Belief** - Remove a belief and regain freedom
- **Shift+Click** - Unlock a locked cluster

### Belief Categories
- 🔴 **About Self** - Beliefs about your identity
- 💗 **About Relationships** - Expectations of others
- 🔵 **About the World** - Worldview beliefs
- 🟠 **About Success** - Achievement beliefs
- ⚫ **About Control** - Need for control

### Interactions
- Same-colored beliefs attract and form tight clusters
- Different categories repel to spread across the viewport
- Opposing beliefs (like "I must be perfect" ↔ "I'm not good enough") strongly repel
- Locked clusters (🔒) stay in place and don't respond to physics

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rautelak/weightofcertainity.git
cd weightofcertainity

# Install dependencies
npm install

# Start the development server
npm start
```

The game will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🛠️ Technical Details

Built with:
- **React 18** - UI framework
- **Custom Physics Engine** - Force-directed graph simulation
- **SVG Rendering** - Smooth, scalable graphics
- **State Management** - React hooks

### Key Mechanics

**Physics Forces:**
- **Attraction** (same category): Pulls similar beliefs together
- **Repulsion** (different categories): Pushes clusters apart
- **Strong Repulsion** (oppositions): Maximum separation for contradicting beliefs
- **Overlap Prevention**: Prevents beliefs from stacking

**Movement Constraints:**
- Speed multiplier: `max(0.1, 1 - beliefs.length * 0.05)`
- Tether force increases with number of beliefs
- Damping factor decreases with more beliefs

## 📝 Example Belief Oppositions

The game includes 40+ predefined oppositions, such as:

**Personal:**
- "I must be perfect" ↔ "I'm not good enough"
- "I must be in control" ↔ "I can let go"
- "Emotions are weakness" ↔ "Emotions are valid"

**Social/Political:**
- "Resources belong to everyone" ↔ "Accumulating wealth should be allowed"
- "Individual freedom is paramount" ↔ "Community needs come first"
- "Free markets solve everything" ↔ "Markets need regulation"

**Philosophical:**
- "Everything happens for a reason" ↔ "Life is random and chaotic"
- "We have free will" ↔ "Everything is determined"
- "Morality is objective" ↔ "Morality is subjective"

## 🎨 Customization

You can easily add your own beliefs and oppositions by modifying:
- `beliefOptions` array - Add predefined beliefs
- `oppositions` array - Define contradicting belief pairs
- `categories` object - Add new belief categories

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new belief examples
- Suggest new oppositions
- Improve physics parameters
- Enhance UI/UX
- Report bugs

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🌟 Inspiration

This project explores the philosophical concept that our certainties constrain us. The more we "know for sure," the less we can move freely through possibility space. It's inspired by ideas from:
- Cognitive psychology and confirmation bias
- Eastern philosophy on attachment
- Systems thinking and degrees of freedom
- Network theory and constraint satisfaction

## 🎓 Educational Use

This tool can be used to:
- Visualize belief systems and worldviews
- Explore cognitive biases and mental models
- Teach about degrees of freedom in systems
- Demonstrate network effects and clustering
- Facilitate discussions about certainty vs. flexibility

---

**Created with curiosity about freedom, certainty, and the beliefs that bind us.**
