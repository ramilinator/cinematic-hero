@ import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  --story-orange: #f47721;
  --story-orange-light: #ffab62;
  --story-ink: #20130d;
  --story-cream: #fff4e7;
  --story-mono: "DM Mono", monospace;
  --story-display: "Space Grotesk", sans-serif;
}

/* Hero */
.story-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100svh;
  min-height: 660px;
  overflow: hidden;
  background: var(--story-orange);
  color: var(--story-ink);
  font-family: var(--story-display);
}

/* Orange square grid */
.story-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--story-orange);
  transform-origin: center;
}

.story-background-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      to right,
      rgba(53, 24, 9, 0.23) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(53, 24, 9, 0.23) 1px,
      transparent 1px
    );
  background-size: 56px 56px;
  background-position: center;
}

.story-background-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 70% 45%,
      rgba(255, 197, 130, 0.45),
      transparent 58%
    ),
    linear-gradient(
      130deg,
      rgba(255, 173, 92, 0.16),
      transparent 45%,
      rgba(125, 43, 7, 0.08)
    );
}

.story-background-word {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(48, 22, 10, 0.57);
  font-size: clamp(110px, 16vw, 250px);
  font-weight: 700;
  line-height: 0.82;
  letter-spacing: -0.105em;
  white-space: nowrap;
  user-select: none;
  transform: translate(-50%, -50%);
}

.story-background-index,
.story-background-coordinate {
  position: absolute;
  color: rgba(43, 21, 11, 0.8);
  font-family: var(--story-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
}

.story-background-index {
  top: 18%;
  left: 5%;
}

.story-background-coordinate {
  right: 5%;
  bottom: 17%;
}

/* Header */
.story-topbar {
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  padding: 24px 5.2% 15px;
}

.story-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  color: var(--story-ink);
  text-decoration: none;
}

.story-brand-mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--story-ink);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.story-brand-label,
.story-topbar-status,
.story-top-link {
  font-family: var(--story-mono);
  font-size: 9px;
  letter-spacing: 0.07em;
}

.story-brand-label {
  font-size: 9px;
}

.story-topbar-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  white-space: nowrap;
}

.story-status-dot,
.story-live-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #24421c;
}

.story-top-link {
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 8px;
  color: var(--story-ink);
  text-decoration: none;
}

.story-top-link:hover {
  opacity: 0.7;
}

/* Layout */
.story-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  align-items: center;
  flex: 1;
  gap: 3%;
  min-height: 0;
  padding: 0 7.2% 20px;
}

.story-copy {
  position: relative;
  z-index: 3;
  min-width: 0;
}

.story-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  font-family: var(--story-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
}

.story-kicker-line {
  width: 30px;
  height: 2px;
  background: var(--story-ink);
}

/* Messages */
.story-messages {
  position: relative;
  min-height: 280px;
}

.story-step {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 550px;
  visibility: hidden;
  opacity: 0;
}

.story-step.is-initial {
  visibility: visible;
  opacity: 1;
}

.story-step-meta {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 17px;
  color: rgba(38, 21, 12, 0.72);
  font-family: var(--story-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
}

.story-step-meta span:first-child {
  padding: 6px 8px;
  border: 1px solid rgba(41, 22, 12, 0.4);
}

.story-title {
  margin: 0;
  font-size: clamp(46px, 5.7vw, 84px);
  font-weight: 700;
  line-height: 0.96;
  letter-spacing: -0.075em;
}

.story-title span {
  color: var(--story-cream);
  -webkit-text-stroke: 1px var(--story-ink);
}

.story-description {
  max-width: 410px;
  margin: 23px 0 0;
  color: rgba(39, 23, 14, 0.88);
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.8;
}

.story-message-tag {
  display: inline-block;
  margin-top: 20px;
  padding: 9px 11px;
  border: 1px solid rgba(47, 25, 12, 0.4);
  font-family: var(--story-mono);
  font-size: 8px;
  letter-spacing: 0.07em;
}

/* CTA */
.story-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 25px;
}

.story-primary-cta,
.story-secondary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-height: 46px;
  padding: 0 16px;
  font-family: var(--story-mono);
  font-size: 9px;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.story-primary-cta {
  border: 1px solid var(--story-ink);
  background: var(--story-ink);
  color: var(--story-cream);
}

.story-primary-cta:hover {
  transform: translateY(-2px);
  background: transparent;
  color: var(--story-ink);
}

.story-secondary-cta {
  border: 1px solid rgba(37, 21, 13, 0.45);
  color: var(--story-ink);
}

.story-secondary-cta:hover {
  transform: translateY(-2px);
  background: rgba(255, 244, 231, 0.3);
}

/* Scroll hint */
.story-scroll-hint {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  font-family: var(--story-mono);
  font-size: 8px;
  letter-spacing: 0.09em;
}

.story-scroll-icon {
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border: 1px solid rgba(38, 22, 13, 0.45);
}

.story-scroll-rule {
  width: 34px;
  height: 1px;
  margin-left: 4px;
  background: rgba(38, 22, 13, 0.5);
}

/* Visual stage */
.story-visual {
  position: relative;
  align-self: stretch;
  min-width: 0;
  min-height: 420px;
  isolation: isolate;
}

.story-visual-cross {
  position: absolute;
  top: 7%;
  right: 7%;
  font-family: var(--story-mono);
  font-size: 26px;
}

.story-visual-number {
  position: absolute;
  top: 17%;
  right: 7%;
  font-family: var(--story-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  writing-mode: vertical-rl;
}

/* Portrait frame */
.story-portrait-frame {
  position: absolute;
  top: 50%;
  left: 48%;
  z-index: 2;
  width: min(74%, 420px);
  height: min(77%, 530px);
  min-height: 340px;
  border: 1px solid rgba(49, 24, 11, 0.8);
  background: rgba(255, 196, 135, 0.12);
  transform: translate(-50%, -50%);
}

.story-portrait-frame::before {
  position: absolute;
  inset: 10px;
  z-index: 0;
  border: 1px solid rgba(51, 24, 11, 0.28);
  content: "";
  pointer-events: none;
}

.story-corners {
  position: absolute;
  inset: -6px;
  z-index: 5;
  pointer-events: none;
}

.story-corners i {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: var(--story-ink);
  border-style: solid;
}

.story-corners i:nth-child(1) {
  top: 0;
  left: 0;
  border-width: 2px 0 0 2px;
}

.story-corners i:nth-child(2) {
  top: 0;
  right: 0;
  border-width: 2px 2px 0 0;
}

.story-corners i:nth-child(3) {
  bottom: 0;
  left: 0;
  border-width: 0 0 2px 2px;
}

.story-corners i:nth-child(4) {
  right: 0;
  bottom: 0;
  border-width: 0 2px 2px 0;
}

.story-portrait-label {
  position: absolute;
  top: 19px;
  right: 20px;
  left: 20px;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-family: var(--story-mono);
  font-size: 8px;
  letter-spacing: 0.08em;
}

.story-portrait {
  position: absolute;
  inset: 34px 13px 63px;
  z-index: 1;
  overflow: hidden;
  will-change: transform, opacity;
}

.story-portrait-image {
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 15px 18px rgba(79, 35, 10, 0.14));
}

.story-portrait-caption {
  position: absolute;
  right: 17px;
  bottom: 15px;
  left: 17px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 11px;
  padding-top: 12px;
  border-top: 1px solid rgba(45, 23, 11, 0.38);
}

.story-caption-mark {
  display: grid;
  width: 33px;
  height: 33px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--story-ink);
  font-size: 11px;
  font-weight: 700;
}

.story-portrait-caption strong,
.story-portrait-caption small {
  display: block;
}

.story-portrait-caption strong {
  font-size: 10px;
}

.story-portrait-caption small {
  margin-top: 4px;
  font-family: var(--story-mono);
  font-size: 7px;
}

/* Code card */
.story-code-card {
  position: absolute;
  top: 16%;
  right: -1%;
  z-index: 4;
  width: 205px;
  padding: 13px;
  border: 1px solid rgba(255, 244, 231, 0.32);
  background: var(--story-ink);
  color: var(--story-cream);
  box-shadow: 8px 8px 0 rgba(82, 33, 11, 0.15);
}

.story-card-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(255, 244, 231, 0.17);
  font-family: var(--story-mono);
  font-size: 8px;
}

.story-card-icon {
  display: grid;
  place-items: center;
  color: var(--story-orange-light);
}

.story-card-dots {
  margin-left: auto;
  color: rgba(255, 244, 231, 0.55);
}

.story-code-lines {
  padding: 14px 0 11px;
  font-family: var(--story-mono);
  font-size: 9px;
  line-height: 1.95;
}

.story-code-lines p {
  margin: 0;
  white-space: nowrap;
}

.story-code-indent {
  padding-left: 12px;
}

.story-code-purple {
  color: #e5a3ff;
}

.story-code-yellow {
  color: #ffd58a;
}

.story-code-green {
  color: #b6e3a5;
}

.story-code-blue {
  color: #9bd6ff;
}

.story-code-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 244, 231, 0.17);
  color: rgba(255, 244, 231, 0.75);
  font-family: var(--story-mono);
  font-size: 7px;
}

.story-code-footer .story-live-dot {
  width: 6px;
  height: 6px;
  background: #9bd6a0;
}

/* Capability card */
.story-capability-card {
  position: absolute;
  right: -1%;
  bottom: 17%;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 11px;
  width: 240px;
  padding: 14px;
  border: 1px solid var(--story-ink);
  background: var(--story-cream);
  box-shadow: 6px 6px 0 rgba(82, 33, 11, 0.14);
}

.story-capability-icon {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  background: var(--story-orange);
}

.story-capability-copy {
  min-width: 0;
}

.story-capability-copy strong,
.story-capability-copy span {
  display: block;
}

.story-capability-copy strong {
  font-size: 9px;
}

.story-capability-copy span {
  margin-top: 5px;
  font-size: 10px;
}

.story-capability-spark {
  margin-left: auto;
  flex: 0 0 auto;
}

/* Floating badges */
.story-floating-badge {
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid rgba(39, 22, 13, 0.55);
  background: rgba(255, 244, 231, 0.88);
  font-family: var(--story-mono);
  font-size: 8px;
  backdrop-filter: blur(8px);
}

.story-badge-code {
  bottom: 9%;
  left: 0;
}

.story-badge-braces {
  top: 9%;
  left: 2%;
}

/* Rocket */
.story-rocket {
  position: absolute;
  top: 40%;
  left: 4%;
  z-index: 6;
  width: clamp(135px, 18vw, 245px);
  aspect-ratio: 5 / 3;
  pointer-events: none;
  will-change: transform, opacity;
}

.story-rocket-image {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 13px rgba(58, 26, 8, 0.18));
}

.story-rocket-trail {
  position: absolute;
  top: 47%;
  left: -60%;
  z-index: 1;
  width: 70%;
  height: 2px;
  background: linear-gradient(to left, rgba(66, 28, 10, 0.55), transparent);
}

/* Footer */
.story-bottom-bar {
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  padding: 17px 5.2% 23px;
}

.story-bottom-caption {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--story-mono);
  font-size: 8px;
  letter-spacing: 0.06em;
}

.story-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--story-mono);
  font-size: 8px;
}

.story-progress-track {
  position: relative;
  flex: 1;
  height: 2px;
  overflow: hidden;
  background: rgba(39, 22, 13, 0.25);
}

.story-progress-bar {
  position: absolute;
  inset: 0 auto 0 0;
  width: 100%;
  background: var(--story-ink);
  transform: scaleX(0);
  transform-origin: left;
}

.story-progress-value {
  min-width: 25px;
  text-align: right;
}

.story-bottom-location {
  justify-self: end;
  font-family: var(--story-mono);
  font-size: 8px;
}

/* Tablet */
@media (max-width: 1100px) {
  .story-layout {
    padding-right: 5%;
    padding-left: 5%;
  }

  .story-title {
    font-size: clamp(43px, 6vw, 68px);
  }

  .story-portrait-frame {
    width: 76%;
    height: 72%;
  }

  .story-code-card {
    right: -2%;
    width: 185px;
  }

  .story-capability-card {
    right: -2%;
    width: 218px;
  }

  .story-background-word {
    font-size: 17vw;
  }
}

/* Mobile */
@media (max-width: 760px) {
  .story-hero {
    height: auto;
    min-height: 100svh;
  }

  .story-background-grid {
    background-size: 36px 36px;
  }

  .story-background-word {
    top: 40%;
    font-size: 19vw;
    letter-spacing: -0.09em;
    -webkit-text-stroke-width: 1px;
  }

  .story-background-index {
    top: 13%;
    left: 6%;
    font-size: 8px;
  }

  .story-background-coordinate {
    right: 6%;
    bottom: 9%;
    font-size: 8px;
  }

  .story-topbar {
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 17px 6% 10px;
  }

  .story-brand-mark {
    width: 34px;
    height: 34px;
  }

  .story-brand-label {
    font-size: 8px;
  }

  .story-topbar-status {
    display: none;
  }

  .story-top-link {
    font-size: 8px;
  }

  .story-layout {
    display: flex;
    flex-direction: column;
    flex: none;
    gap: 0;
    padding: 22px 7% 12px;
  }

  .story-copy {
    order: 1;
  }

  .story-kicker {
    margin-bottom: 22px;
    font-size: 9px;
  }

  .story-messages {
    min-height: 285px;
  }

  .story-step {
    max-width: 100%;
  }

  .story-step-meta {
    margin-bottom: 15px;
    font-size: 8px;
  }

  .story-title {
    font-size: clamp(47px, 11.5vw, 78px);
  }

  .story-description {
    margin-top: 19px;
    font-size: 13px;
  }

  .story-message-tag {
    margin-top: 15px;
    font-size: 7px;
  }

  .story-cta-row {
    gap: 9px;
    margin-top: 19px;
  }

  .story-primary-cta,
  .story-secondary-cta {
    min-height: 43px;
    gap: 9px;
    padding: 0 11px;
    font-size: 8px;
  }

  .story-scroll-hint {
    margin-top: 22px;
    font-size: 7px;
  }

  .story-visual {
    order: 2;
    align-self: auto;
    width: 100%;
    min-height: 420px;
    margin-top: 14px;
  }

  .story-visual-cross {
    top: 4%;
    right: 5%;
    font-size: 21px;
  }

  .story-visual-number {
    top: 13%;
    right: 5%;
    font-size: 8px;
  }

  .story-portrait-frame {
    top: 49%;
    left: 48%;
    width: min(73%, 350px);
    height: 355px;
    min-height: 0;
  }

  .story-portrait-label {
    top: 17px;
    right: 15px;
    left: 15px;
    font-size: 7px;
  }

  .story-portrait {
    inset: 32px 8px 58px;
  }

  .story-portrait-caption {
    right: 12px;
    bottom: 12px;
    left: 12px;
    gap: 9px;
  }

  .story-portrait-caption strong {
    font-size: 9px;
  }

  .story-portrait-caption small {
    font-size: 6px;
  }

  .story-code-card {
    top: 9%;
    right: -2%;
    width: 170px;
    padding: 10px;
  }

  .story-code-lines {
    font-size: 8px;
  }

  .story-capability-card {
    right: -2%;
    bottom: 8%;
    width: 205px;
    padding: 10px;
  }

  .story-capability-icon {
    width: 31px;
    height: 31px;
  }

  .story-capability-copy strong {
    font-size: 8px;
  }

  .story-capability-copy span {
    font-size: 9px;
  }

  .story-floating-badge {
    gap: 6px;
    padding: 8px 9px;
    font-size: 7px;
  }

  .story-badge-code {
    bottom: 3%;
  }

  .story-badge-braces {
    top: 4%;
  }

  .story-rocket {
    top: 40%;
    left: 1%;
    width: 140px;
  }

  .story-bottom-bar {
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 15px 6% 20px;
  }

  .story-bottom-caption {
    font-size: 7px;
  }

  .story-progress {
    display: none;
  }

  .story-bottom-location {
    font-size: 7px;
  }
}

/* Small phones */
@media (max-width: 420px) {
  .story-layout {
    padding-right: 6%;
    padding-left: 6%;
  }

  .story-messages {
    min-height: 305px;
  }

  .story-title {
    font-size: clamp(43px, 11.5vw, 54px);
  }

  .story-description {
    font-size: 12px;
  }

  .story-visual {
    min-height: 365px;
  }

  .story-portrait-frame {
    width: 73%;
    height: 310px;
  }

  .story-code-card {
    top: 10%;
    width: 153px;
  }

  .story-capability-card {
    bottom: 7%;
    width: 188px;
  }

  .story-rocket {
    width: 115px;
  }

  .story-background-grid {
    background-size: 30px 30px;
  }

  .story-primary-cta,
  .story-secondary-cta {
    gap: 7px;
    padding: 0 9px;
    font-size: 7px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-primary-cta,
  .story-secondary-cta,
  .story-top-link {
    transition: none;
  }
}
