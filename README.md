<div align="center">

# 🌳 COMP 2080 — Master Data Structures & Algorithms Guide

**A fully interactive, single-file study tool for Binary Search Trees, Graph Algorithms, and core CS concepts.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Canvas API](https://img.shields.io/badge/Canvas_API-FF6F00?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

### 👉 [🚀 Try It Live — Click Here to Open the Guide!](https://luistello87.github.io/COMP2080-DSA-Guide/comp2080_master_guide.html) 👈

[![Live Demo](https://img.shields.io/badge/▶_LIVE_DEMO-Click_to_Launch-1D9E75?style=for-the-badge&logoColor=white)](https://luistello87.github.io/COMP2080-DSA-Guide/comp2080_master_guide.html)

*Zero dependencies · No build step · Just open the file and start learning*

</div>

---

## 📖 Overview

This project is a **comprehensive, self-contained HTML application** designed as an interactive study companion for the COMP 2080 (Data Structures & Algorithms) course. It covers everything from BST fundamentals to Dijkstra's shortest path algorithm — all with **live canvas-based visualizations**, **step-by-step algorithm traces**, and **hands-on practice arenas**.

### ✨ Key Highlights

- 🎨 **Rich Canvas Visualizations** — Trees and graphs are rendered in real-time using the HTML5 Canvas API
- 🧠 **11 Interactive Modules** — Covering BST operations, traversals, graph search, and shortest-path algorithms
- 🏋️ **Training Arenas** — Quizzes and builders that let you practice until you master each concept
- 💻 **Coding Laboratory** — Write and validate Java algorithm implementations directly in the browser
- 📦 **Zero Dependencies** — One `~60KB` HTML file. No frameworks, no npm, no server required
- 📱 **Responsive Design** — Works on desktop and tablet screens

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Luistello87/COMP2080-DSA-Guide.git

# Open the guide (any of these work)
start comp2080_master_guide.html          # Windows
open comp2080_master_guide.html           # macOS
xdg-open comp2080_master_guide.html       # Linux
```

Or simply **double-click** `comp2080_master_guide.html` in your file explorer. That's it — no build step needed.

---

## 🗂️ Module Breakdown

The application is divided into **11 sections**, each targeting a specific topic area. Use the **Quick Discovery Navigation** bar at the top to jump between modules.

### Module 1 — 📚 BST Foundations & Theory

> Core terminology and performance metrics for Binary Search Trees.

| Concept | Description |
|---------|-------------|
| **BST Property** | Left subtree values < node < Right subtree values |
| **Root / Parent / Child / Leaf** | Relational terminology for tree nodes |
| **Height** | Longest path from root to any leaf |
| **Performance** | Average: `O(log n)` — Worst (skewed): `O(n)` |

---

### Module 2 — 📥 BST Insertion (Step-by-Step)

> Animated, step-by-step insertion process with a live log trace.

**How to use:**
1. Click **"Execute Next Step"** to insert the next value from the sequence
2. Watch the canvas animate the node placement
3. Read the **Computer Logic Trace** panel for the decision path
4. Click **"Generate Random Set"** for a new sequence

---

### Module 3 — 🔍 BST Traversal Visit Sequences

> Animated visualizations for all 4 traversal types with color-coded node highlighting.

| Traversal | Order | Best For |
|-----------|-------|----------|
| **In-Order** | Left → Root → Right | Sorted output (ascending) |
| **Pre-Order** | Root → Left → Right | Cloning / serializing tree structure |
| **Post-Order** | Left → Right → Root | Safe deletion (children first) |
| **Level-Order** | Top → Bottom (BFS) | Breadth-first exploration |

Click any traversal button to watch the animated walk with a highlighted visit sequence.

---

### Module 4 — ♻️ BST Deletion (3 Scenarios)

> Interactive demonstration of all three BST deletion cases.

| Case | Condition | Action |
|------|-----------|--------|
| **Case 1** | Node is a leaf (0 children) | Remove the parent's pointer |
| **Case 2** | Node has 1 child | Bypass: connect parent to the existing child |
| **Case 3** | Node has 2 children | Replace with In-Order Successor, then delete successor |

For **Case 3**, click **"Step Logic"** to walk through the swap-and-delete process stage by stage.

---

### Module 5 — 🛠️ Tree Reconstruction Builders

> Rebuild a BST from traversal sequences using the interactive chip-selection interface.

**Module A: Pre-Order + In-Order**
- Pre-Order's **first** element is always the root
- Find it in the In-Order list to split left/right subtrees
- Click chips in the In-Order row to place nodes

**Module B: Post-Order + In-Order**
- Post-Order's **last** element is the root
- Process subtrees from Right to Left
- Click **"Random Challenge"** for unlimited practice

---

### Module 6 — 🏋️ Interactive Training Arenas

> Two practice arenas for hands-on experimentation.

#### Arena 1: Master BST Builder
- **Insert** / **Delete** values manually using the input field
- **"Balanced Random 7"** generates a pre-populated tree
- Watch the canvas update in real-time

#### Arena 2: Traversal Mastery Quiz
- A random tree is generated on the canvas
- Enter the correct **In-Order** and **Pre-Order** sequences
- Choose **Easy** (5 nodes) or **Hard** (9 nodes) difficulty
- Click **"Verify My Answers"** to check, or **"Reveal Solution"** to see the answer

---

### Module 7 — 📊 Adjacency Matrices (Directed & Weighted)

> Interactive 7×7 matrix quiz for directed-weighted graph representation.

**How to use:**
1. Click **"Generate Hard Graph"** to create a random graph on the canvas
2. Fill in the adjacency matrix with edge weights (`0` = no edge)
3. Click **"Check Matrix"** — correct cells turn green, errors turn red
4. Use **"Fill Solution"** to auto-populate the answer

---

### Module 8 — 🕸️ Graph Search: DFS & BFS

> Animated comparison of Depth-First Search and Breadth-First Search.

| Algorithm | Data Structure | Strategy |
|-----------|---------------|----------|
| **DFS** | Stack | Go as deep as possible, then backtrack |
| **BFS** | Queue | Explore all neighbors at current level first |

Click **"Animate DFS"** or **"Animate BFS"** to watch the traversal unfold node-by-node with an `800ms` delay between steps.

---

### Module 9 — 🚀 Dijkstra's Shortest Path Trace

> Full algorithm trace table matching exam-style format.

**How to use:**
1. Study the weighted graph on the canvas (source: **Node A**)
2. Fill in the trace table row by row with format `distance(predecessor)` — e.g., `25(a)`
3. Use `Inf` for unreachable nodes
4. Click **"Validate"** to check each cell
5. Click **"Hint"** for step-by-step guidance
6. Click **"Fill Solution"** to see the complete trace

**Pre-loaded graph:** A→B(25), A→C(45), B→C(10), B→D(50), B→E(60), B→F(55), C→E(65), C→G(70), D→F(15), D→E(20), E→F(30), E→G(40), F→G(35)

---

### Module 10 — 🧪 Coding Laboratory

> Write Java implementations for 6 core BST algorithms.

| Challenge | Goal |
|-----------|------|
| **Binary Search** | Recursively find if a value exists |
| **Find Min** | Iterate to the leftmost node |
| **Find Max** | Iterate to the rightmost node |
| **Calculate Height** | Return `1 + max(left, right)` recursively |
| **Count Nodes** | Sum `1 + left + right` recursively |
| **Validate BST** | Check bounds propagation with `min`/`max` |

Each challenge includes a **template**, a **conceptual validator**, and a **"Reveal Solution"** button.

---

### Module 11 — 📋 Java Study Reference

> Full-source Java code for exam review, including:

- **Node class** definition
- **Recursive insertion** implementation
- **3-case deletion** with In-Order Successor logic

---

## 🏗️ Architecture

The application is structured as a **modular vanilla JavaScript** codebase inside a single HTML file:

```
comp2080_master_guide.html
├── <style>           → Design system (CSS custom properties, responsive grid)
├── <body>            → 11 semantic <section> elements
└── <script>
    ├── Utils         → Shared Canvas drawing helpers (drawNode, drawEdge)
    ├── Theory_Ins    → Module 2: Insertion step engine
    ├── Theory_Trav   → Module 3: Traversal animation engine
    ├── Theory_Del    → Module 4: Deletion case renderer
    ├── Bld_PreIn     → Module 5A: Pre+In-Order tree builder
    ├── Bld_PostIn    → Module 5B: Post+In-Order tree builder
    ├── Arena         → Module 6A: Free-form BST builder
    ├── Quiz          → Module 6B: Traversal quiz engine
    ├── Matrix_Arena  → Module 7: Adjacency matrix generator + checker
    ├── Search_Arena  → Module 8: DFS/BFS animation engine
    ├── Dijkstra_Arena→ Module 9: Shortest-path trace + validator
    └── Coding_Lab    → Module 10: Code editor with solution reveal
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#378ADD` | Headers, links, active states |
| `--secondary` | `#1D9E75` | Visited nodes, success accents |
| `--accent` | `#F9CB42` | Active/highlighted nodes |
| `--success` | `#639922` | Correct answers, success buttons |
| `--error` | `#E24B4A` | Wrong answers, deletion targets |
| `--warning` | `#BA7517` | Warnings, reset buttons |

---

## 📁 Repository Structure

```
.
├── comp2080_master_guide.html       # ⭐ Main application (all-in-one)
├── bst_practice_complete.html       # Supplementary BST practice module
├── data_structures_guide.html       # Earlier version of the study guide
├── final_bst_practice_guide.html    # Final BST practice iteration
├── tests/                           # Test files
└── README.md                        # This file
```

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure and Canvas API for all visualizations
- **Vanilla CSS** — Custom properties, CSS Grid, responsive design, animations  
- **Vanilla JavaScript** — Modular ES5 objects for each interactive module
- **Canvas 2D API** — Real-time node/edge rendering with color-coded states

---

## 📄 License

This project is created for educational purposes as part of the **COMP 2080** course curriculum.

---

<div align="center">

**Built with ❤️ for mastering Data Structures & Algorithms**

</div>
