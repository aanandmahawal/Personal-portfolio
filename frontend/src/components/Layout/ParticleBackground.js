.sidebar-section {
  display: flex;
  position: relative; /* anchors the animated particle canvas */
  overflow: hidden;
  /* Hanya-style backdrop: warm grey-taupe wash (mesh is now animated) */
  background-color: #d2d0d0;
  background-image: radial-gradient(
      circle at 82% 20%,
      rgba(199, 179, 165, 0.9),
      rgba(199, 179, 165, 0) 55%
    ),
    linear-gradient(120deg, #d2ced6 0%, #d2d0d0 45%, #cdbcae 100%);
  border-bottom: 4px solid #f29f67;
}

.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* clicks pass straight through to the page */
}

.sidebar-section > .container {
  position: relative;
  z-index: 1; /* hero text and buttons stay above the animation */
}

.sidebar {
  height: 100vh;
  background-color: #1e1e2c;
  width: 90px;
  position: fixed;
}
.sidebar-toggle {
  width: 200px;
}
.sidebar-toggle-icons {
  display: flex;
  align-items: right;
  justify-content: right;
  cursor: pointer;
}
.sidebar-toggle-icons p svg {
  background-color: #f29f67;
  color: white;
  margin-top: 10px;
}

/* ==== MOBILE VIEW ========== */
@media (max-width: 600px) {
  .sidebar {
    display: none;
  }
}
