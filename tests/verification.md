# COMP 2080 Guide: Manual Verification Checklist

Use this document to verify that every activity and button in the Master Guide functions correctly after the overhaul.

## 1. UI & Navigation
- [ ] **Sticky Toggle**: Scroll down; the navigation bar should hide. Scroll up; it should reappear.
- [ ] **Jump Links**: Click "Dijkstra Trace" in the nav. The page should scroll perfectly to the section without clipping the title.
- [ ] **Responsiveness**: Resize the browser to a narrow width; the Dijkstra table and Code Editor should remain usable.

## 2. BST Foundations & Theory
- [ ] **Insertion Steps**: Click "Next Step" 5 times. The tree should build node-by-node.
- [ ] **Deletion Cases**: Click Case 1, 2, and 3. The canvas should update with the relevant example and the explanation text should change.
- [ ] **Traversals**: Click "Pre-order". Wait for the animation. The results strip should match the highlighted yellow nodes.

## 3. Tree Construction (Builders)
- [ ] **Preorder+Inorder**: Click nodes in the correct order. Wrong nodes should show a red border/error message.
- [ ] **Letters Toggle**: Toggle "Use Letters". The builder should now show A, B, C... labels and logic should still work.
- [ ] **Auto-Complete**: Click "Auto" to ensure the logic finishes correctly.

## 4. Practice Arenas
- [ ] **Insertion Arena**: Enter "45" and click Insert. Node should appear on canvas.
- [ ] **Randomize BST**: Click "Random 7". A balanced random tree should generate.
- [ ] **Traversal Quiz**: Generate a "Medium" tree. Enter values and click "Check". The feedback should be accurate.

## 5. Graph Mastery & Dijkstra
- [ ] **DFS Animation**: Click "Animate DFS". Confirm it follows the "Weight Priority" rule (visiting highest weight neighbors first).
- [ ] **Dijkstra Trace Table**:
  - [ ] Generate a new graph.
  - [ ] Enter a value like `25(A)` in a cell.
  - [ ] Click "Verify". Correct cells should be green, incorrect red.
  - [ ] Click "Show Solution" to fill the matrix.

## 6. Coding Lab
- [ ] **Challenge Switcher**: Click "Find Minimum". The template and description should update.
- [ ] **Validator**: Click "Validate Logic". It should give conceptual feedback on the code structure.
