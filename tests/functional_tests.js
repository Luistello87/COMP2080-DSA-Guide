/**
 * COMP 2080 Master Guide - Functional Test Script
 * Run this in the browser console (F12) to verify module integrity.
 */
(function() {
  console.log("%c--- COMP 2080 Functional Test Suite ---", "color: #378ADD; font-weight: bold; font-size: 1.2em;");

  const modules = [
    { name: "AppCore", ref: typeof Utils !== 'undefined' },
    { name: "BST Theory (Insertion)", ref: typeof Guide_Insertion !== 'undefined' },
    { name: "BST Theory (Deletion)", ref: typeof Guide_Deletion !== 'undefined' },
    { name: "BST Theory (Traversal)", ref: typeof Guide_Traversal !== 'undefined' },
    { name: "Tree Builder (PreIn)", ref: typeof Bld_PreIn !== 'undefined' },
    { name: "Tree Builder (PostIn)", ref: typeof Bld_PostIn !== 'undefined' },
    { name: "Practice Arena", ref: typeof Prac_Arena !== 'undefined' },
    { name: "Traversal Quiz", ref: typeof Prac_Quiz !== 'undefined' },
    { name: "Graph Search", ref: typeof Graph_Module !== 'undefined' },
    { name: "Dijkstra Arena", ref: typeof HardMatrix_Module !== 'undefined' },
    { name: "Coding Lab", ref: typeof Code_Module !== 'undefined' }
  ];

  let errors = 0;
  modules.forEach(m => {
    if (m.ref) {
      console.log(`%c[PASS] %c${m.name} module is loaded.`, "color: green; font-weight: bold;", "color: black;");
    } else {
      console.error(`[FAIL] ${m.name} module is NOT defined!`);
      errors++;
    }
  });

  if (errors === 0) {
    console.log("%cSUCCESS: All modules are structurally sound.", "color: green; font-weight: bold; margin-top: 10px;");
  } else {
    console.log(`%cFAILURE: ${errors} module(s) failed structural check.`, "color: red; font-weight: bold; margin-top: 10px;");
  }

  // Check specific canvas elements
  const canvases = ['bld1-canvas', 'bld2-canvas', 'arena-ins-canvas', 'hard-matrix-canvas'];
  canvases.forEach(cid => {
    if (!document.getElementById(cid)) console.warn(`Element with ID '${cid}' not found in DOM.`);
  });
})();
