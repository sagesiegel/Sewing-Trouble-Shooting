const machines = {
  generic: {
    brand: "Generic or universal",
    name: "Generic sewing machine",
    shortName: "Generic machine",
    type: "general"
  },

  tm16: {
    brand: "Janome",
    name: "Janome Travel Mate 16",
    shortName: "Janome TM16",
    type: "mechanical"
  },

  "5300qdc": {
    brand: "Janome",
    name: "Janome 5300QDC",
    shortName: "Janome 5300QDC",
    type: "computerized"
  },

  m8: {
    brand: "Janome",
    name: "Janome Continental M8 Professional",
    shortName: "Janome Continental M8",
    type: "advanced"
  }
};

const universalSteps = [
  {
    id: "rethread",
    title: "Completely rethread the upper thread",
    introduction:
      "An incorrectly seated upper thread is one of the most common causes of skipped stitches. Even if the machine looks threaded correctly, completely removing and reinstalling the thread can solve the problem.",
    instructions: [
      "Turn the machine off before working near the needle.",
      "Raise the presser foot. This opens the tension discs so the thread can settle between them.",
      "Raise the needle and thread take-up lever to their highest position by turning the handwheel toward you.",
      "Remove the upper thread completely. Do not pull the thread backward through the tension system. Clip it near the spool and pull the remaining thread out through the needle.",
      "Place the spool on the spool pin and install the correct spool cap, if your machine uses one.",
      "Follow every numbered threading guide in order.",
      "Confirm the thread passes through the take-up lever.",
      "Thread the needle from the correct direction for your machine.",
      "Lower and raise the presser foot once, then gently pull the thread. You should feel more resistance when the presser foot is lowered."
    ],
    tipTitle: "The presser foot must be raised",
    tip:
      "If the presser foot is down while threading, the upper thread may sit outside the tension discs even though the threading path looks correct.",
    warning:
      "Always turn the machine off before placing your hands near the needle.",
    diagram: "threading"
  },

  {
    id: "replace-needle",
    title: "Replace the needle",
    introduction:
      "A needle may be slightly bent, dull, damaged, or incorrectly sized without looking obviously broken. A fresh needle is one of the fastest ways to rule out a common cause of skipped stitches.",
    instructions: [
      "Turn the machine off.",
      "Raise the needle to its highest position.",
      "Lower the presser foot or place a piece of paper over the needle plate so the old needle cannot fall into the machine.",
      "Loosen the needle-clamp screw and remove the old needle.",
      "Install a brand-new needle appropriate for your fabric.",
      "Push the needle upward as far as it will go before tightening the needle-clamp screw securely.",
      "Rethread the needle and test the machine."
    ],
    tipTitle: "Use the right needle",
    tip:
      "For ordinary woven cotton, begin with a new universal needle in size 80/12. Knit fabrics generally need a ballpoint, jersey, or stretch needle.",
    warning:
      "Do not test with the old needle, even if it appears straight.",
    diagram: "needle"
  },

  {
    id: "needle-position",
    title: "Check how the needle is installed",
    introduction:
      "If the needle is facing the wrong direction or is not pushed fully into the clamp, the hook may be unable to catch the needle thread and form each stitch.",
    instructions: [
      "Turn the machine off and raise the needle.",
      "Loosen the needle-clamp screw just enough to reposition the needle.",
      "Confirm the flat side of the needle faces the direction required by your machine.",
      "Push the needle firmly upward until it cannot go any farther.",
      "Hold it in place while securely tightening the needle-clamp screw.",
      "Rethread the needle from the correct direction and test again."
    ],
    tipTitle: "Needle orientation matters",
    tip:
      "Most modern Janome home sewing machines use needles with the flat side facing the back, and the needle is threaded from front to back.",
    warning:
      "If your machine’s manual specifies a different needle orientation, follow the manual.",
    diagram: "needle-position"
  },

  {
    id: "bobbin",
    title: "Remove and reinsert the bobbin",
    introduction:
      "A bobbin inserted in the wrong direction or a bobbin thread that misses its tension guide can interfere with stitch formation.",
    instructions: [
      "Turn the machine off and raise the needle and presser foot.",
      "Remove the bobbin cover and take out the bobbin.",
      "Check that the bobbin is evenly wound and is the correct type for the machine.",
      "Place the bobbin into the bobbin holder in the correct direction.",
      "Guide the thread through the bobbin-holder slit and under the tension spring.",
      "Leave the recommended thread tail and reinstall the bobbin cover.",
      "Hold the upper thread and turn the handwheel toward you to bring up the bobbin thread, if required by your machine.",
      "Place both thread tails under the presser foot and toward the back."
    ],
    tipTitle: "Bobbin type matters",
    tip:
      "Bobbins that look similar may have slightly different heights or curves. Use the bobbin style specified for your machine.",
    warning:
      "",
    diagram: "bobbin"
  },

  {
    id: "materials",
    title: "Match the needle and thread to the fabric",
    introduction:
      "A needle can deflect or fail to form a proper thread loop when it is not suited to the fabric or thread.",
    instructions: [
      "Identify whether your fabric is woven, knit, stretchy, delicate, or heavy.",
      "For ordinary woven cotton, use a universal 80/12 needle.",
      "For knit fabric, try a ballpoint or jersey needle.",
      "For highly elastic fabric, try a stretch needle.",
      "For denim or tightly woven fabric, use a denim or jeans needle.",
      "Make sure the thread passes easily through the eye of the needle.",
      "Test using good-quality, all-purpose thread and two layers of fabric."
    ],
    tipTitle: "Test one change at a time",
    tip:
      "If the machine stitches woven cotton correctly but skips stitches on your project fabric, the machine may need a different needle type rather than service.",
    warning:
      "",
    diagram: "materials"
  },

  {
    id: "clean",
    title: "Clean the bobbin and hook area",
    introduction:
      "Lint and broken thread around the bobbin holder can prevent smooth thread movement and interfere with stitch formation.",
    instructions: [
      "Turn the machine off and unplug it.",
      "Remove the presser foot, needle, bobbin cover, and bobbin.",
      "Remove the needle plate only if your machine’s instructions allow you to do so.",
      "Use the machine’s lint brush to remove lint from the feed dogs, bobbin holder, and hook area.",
      "Check carefully for short pieces of thread wrapped around moving parts.",
      "Reinstall each part correctly.",
      "Install a new needle, rethread the machine, and test again."
    ],
    tipTitle: "Use a brush",
    tip:
      "Avoid blowing lint deeper into the machine. Do not add oil unless the machine’s instructions specifically tell you where and how to oil it.",
    warning:
      "Unplug the machine before removing the needle plate or cleaning near moving parts.",
    diagram: "clean"
  },

  {
    id: "settings",
    title: "Reset the stitch settings",
    introduction:
      "An unusual stitch selection, altered needle position, or incompatible setting can sometimes look like a mechanical stitching problem.",
    instructions: [
      "Select a basic center-position straight stitch.",
      "Set the stitch length to approximately 2.4–2.5 mm.",
      "Return the stitch width or needle position to the center.",
      "Use the standard zigzag or all-purpose presser foot.",
      "Set the upper tension near the machine’s normal or default range.",
      "Turn off any specialty setting being used for quilting, twin needles, or special accessories.",
      "Test slowly on two layers of woven cotton."
    ],
    tipTitle: "Return to a basic stitch",
    tip:
      "A successful basic straight-stitch test helps separate a machine problem from an accessory, technique, or specialty-setting problem.",
    warning:
      "",
    diagram: "settings"
  }
];

const modelSpecificContent = {
  generic: {
    rethreadExtra:
      "Because threading paths vary, follow the arrows or numbered guides printed directly on your machine.",
    bobbinExtra:
      "Check the diagram printed beside the bobbin area for the correct thread direction.",
    settingsExtra:
      "If your machine has manual dials, return each dial to its normal straight-stitch setting."
  },

  tm16: {
    rethreadExtra:
      "On the TM16, raise the take-up lever completely and follow the front threading channel down, around the lower guide, and back up through the take-up lever before returning to the needle.",
    bobbinExtra:
      "The TM16 uses a top-loading bobbin. Follow the directional arrow beside the bobbin holder and pull the thread through the slit.",
    settingsExtra:
      "Use the TM16 stitch selector to choose a basic straight stitch and set the stitch-length dial to a medium setting."
  },

  "5300qdc": {
    rethreadExtra:
      "On the 5300QDC, raise the presser foot and use the numbered threading path on the machine. Make sure the thread enters the take-up lever before using the built-in needle threader.",
    bobbinExtra:
      "The 5300QDC uses a top-loading bobbin. Follow the bobbin-cover diagram and draw the thread through the slit and guide path.",
    settingsExtra:
      "Select the standard straight stitch from the stitch panel. Return needle position and stitch length to their default values before testing."
  },

  m8: {
    rethreadExtra:
      "On the Continental M8, raise the presser foot and follow the numbered upper-thread path carefully. Confirm the thread is seated in every guide before using the automatic needle threader.",
    bobbinExtra:
      "The Continental M8 uses a top-loading bobbin and automatic bobbin-thread system. Follow the arrows around the bobbin holder and use the built-in thread cutter as directed.",
    settingsExtra:
      "Select an ordinary sewing mode and a basic straight stitch. Clear specialty settings and confirm that the installed needle plate and presser foot are compatible with the selected stitch."
  }
};

const state = {
  selectedBrand: null,
  selectedMachine: null,
  selectedIssue: null,
  currentStepIndex: 0,
  attempts: []
};

const screens = document.querySelectorAll(".screen");

const machineStatus = document.getElementById("machine-status");
const selectedMachineLabel =
  document.getElementById("selected-machine-label");

const changeMachineButton =
  document.getElementById("change-machine-button");

const progressWrapper =
  document.getElementById("progress-wrapper");

const progressLabel =
  document.getElementById("progress-label");

const progressPercentage =
  document.getElementById("progress-percentage");

const progressTrack =
  document.getElementById("progress-track");

const progressFill =
  document.getElementById("progress-fill");

const stepTitle = document.getElementById("step-title");
const stepIntroduction =
  document.getElementById("step-introduction");

const stepInstructions =
  document.getElementById("step-instructions");

const stepDiagram =
  document.getElementById("step-diagram");

const stepTipBox =
  document.getElementById("step-tip-box");

const stepTipTitle =
  document.getElementById("step-tip-title");

const stepTip =
  document.getElementById("step-tip");

const stepWarningBox =
  document.getElementById("step-warning-box");

const stepWarning =
  document.getElementById("step-warning");

const stepNumberBadge =
  document.getElementById("step-number-badge");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.remove("active-screen");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active-screen");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const showMachineStatus = [
    "issue-screen",
    "precheck-screen",
    "troubleshooting-screen",
    "success-screen",
    "service-screen"
  ].includes(screenId);

  machineStatus.classList.toggle(
    "hidden",
    !showMachineStatus || !state.selectedMachine
  );

  changeMachineButton.classList.toggle(
    "hidden",
    !showMachineStatus
  );

  progressWrapper.classList.toggle(
    "hidden",
    screenId !== "troubleshooting-screen"
  );
}

function selectMachine(machineId) {
  state.selectedMachine = machineId;

  selectedMachineLabel.textContent =
    machines[machineId].name;

  showScreen("issue-screen");
}

function resetTroubleshooting() {
  state.selectedIssue = null;
  state.currentStepIndex = 0;
  state.attempts = [];

  document.getElementById("precheck-confirmation").checked = false;
  document.getElementById("begin-steps-button").disabled = true;
}

function resetEverything() {
  state.selectedBrand = null;
  state.selectedMachine = null;
  resetTroubleshooting();

  selectedMachineLabel.textContent = "";
  showScreen("welcome-screen");
}

function getCurrentStep() {
  return universalSteps[state.currentStepIndex];
}

function getModelAddition(stepId) {
  const additions =
    modelSpecificContent[state.selectedMachine] ||
    modelSpecificContent.generic;

  const additionMap = {
    rethread: additions.rethreadExtra,
    bobbin: additions.bobbinExtra,
    settings: additions.settingsExtra
  };

  return additionMap[stepId] || "";
}

function renderStep() {
  const step = getCurrentStep();
  const totalSteps = universalSteps.length;
  const displayNumber = state.currentStepIndex + 1;
  const percentage = Math.round(
    (displayNumber / totalSteps) * 100
  );

  stepTitle.textContent = step.title;
  stepIntroduction.textContent = step.introduction;
  stepNumberBadge.textContent = displayNumber;

  stepInstructions.innerHTML = "";

  const instructions = [...step.instructions];
  const modelAddition = getModelAddition(step.id);

  if (modelAddition) {
    instructions.splice(2, 0, modelAddition);
  }

  instructions.forEach((instruction) => {
    const listItem = document.createElement("li");
    listItem.textContent = instruction;
    stepInstructions.appendChild(listItem);
  });

  if (step.tip) {
    stepTipTitle.textContent = step.tipTitle || "Helpful tip";
    stepTip.textContent = step.tip;
    stepTipBox.classList.remove("hidden");
  } else {
    stepTipBox.classList.add("hidden");
  }

  if (step.warning) {
    stepWarning.textContent = step.warning;
    stepWarningBox.classList.remove("hidden");
  } else {
    stepWarningBox.classList.add("hidden");
  }

  stepDiagram.innerHTML = createDiagram(
    step.diagram,
    machines[state.selectedMachine].shortName
  );

  progressLabel.textContent =
    `Step ${displayNumber} of ${totalSteps}`;

  progressPercentage.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;

  progressTrack.setAttribute(
    "aria-valuenow",
    String(percentage)
  );

  document.getElementById("previous-step-button").style.visibility =
    state.currentStepIndex === 0 ? "hidden" : "visible";

  showScreen("troubleshooting-screen");
}

function createDiagram(type, machineName) {
  const diagrams = {
    threading: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Simplified upper threading path diagram">
          <rect x="80" y="25" width="460" height="195" rx="28"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <rect x="410" y="42" width="80" height="30" rx="9"
            fill="#1d2d3f"/>

          <circle cx="450" cy="57" r="9" fill="#ffffff"/>

          <circle cx="165" cy="79" r="18"
            fill="#f9e9ea" stroke="#b3202a" stroke-width="4"/>

          <circle cx="165" cy="172" r="18"
            fill="#f9e9ea" stroke="#b3202a" stroke-width="4"/>

          <circle cx="305" cy="82" r="18"
            fill="#f9e9ea" stroke="#b3202a" stroke-width="4"/>

          <circle cx="413" cy="178" r="18"
            fill="#f9e9ea" stroke="#b3202a" stroke-width="4"/>

          <path
            d="M450 56 C370 25 185 35 165 79
               C142 120 145 145 165 172
               C200 213 280 144 305 82
               C328 29 399 117 413 178"
            fill="none"
            stroke="#b3202a"
            stroke-width="6"
            stroke-linecap="round"
            stroke-dasharray="10 8"/>

          <line x1="413" y1="196" x2="413" y2="229"
            stroke="#1d2d3f" stroke-width="5"/>

          <circle cx="450" cy="57" r="18"
            fill="none" stroke="#b3202a" stroke-width="3"/>

          <text x="450" y="18" text-anchor="middle"
            fill="#516170" font-size="15" font-weight="700">
            Spool
          </text>

          <text x="165" y="125" text-anchor="middle"
            fill="#516170" font-size="14" font-weight="700">
            Tension path
          </text>

          <text x="305" y="58" text-anchor="middle"
            fill="#516170" font-size="14" font-weight="700">
            Take-up lever
          </text>

          <text x="446" y="227"
            fill="#516170" font-size="14" font-weight="700">
            Needle
          </text>
        </svg>

        <p class="diagram-caption">
          Simplified threading reminder for ${machineName}.
          Follow the numbered guides printed on your machine.
        </p>
      </div>
    `,

    needle: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="New sewing machine needle diagram">
          <rect x="220" y="20" width="90" height="70" rx="13"
            fill="#1d2d3f"/>

          <rect x="248" y="78" width="34" height="117" rx="12"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <path d="M248 181 L265 231 L282 181"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <ellipse cx="265" cy="193" rx="7" ry="16"
            fill="#ffffff" stroke="#b3202a" stroke-width="3"/>

          <line x1="343" y1="59" x2="495" y2="59"
            stroke="#b3202a" stroke-width="4"/>

          <polygon points="495,59 478,49 478,69"
            fill="#b3202a"/>

          <text x="350" y="45"
            fill="#516170" font-size="16" font-weight="700">
            Push fully upward
          </text>

          <line x1="340" y1="193" x2="482" y2="193"
            stroke="#b3202a" stroke-width="4"/>

          <text x="350" y="178"
            fill="#516170" font-size="16" font-weight="700">
            Use a new needle
          </text>
        </svg>

        <p class="diagram-caption">
          Push the new needle completely into the clamp
          before tightening it.
        </p>
      </div>
    `,

    "needle-position": `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Needle orientation diagram">
          <rect x="105" y="28" width="145" height="195" rx="20"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <rect x="165" y="53" width="28" height="122" rx="10"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <path d="M165 164 L179 206 L193 164"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <rect x="365" y="28" width="145" height="195" rx="20"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <rect x="425" y="53" width="28" height="122" rx="10"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <path d="M425 164 L439 206 L453 164"
            fill="#dce4e8" stroke="#516170" stroke-width="3"/>

          <path d="M425 54 L453 54 L453 105 L425 91 Z"
            fill="#9eabb3"/>

          <text x="178" y="245" text-anchor="middle"
            fill="#1d2d3f" font-size="16" font-weight="800">
            Front
          </text>

          <text x="438" y="245" text-anchor="middle"
            fill="#1d2d3f" font-size="16" font-weight="800">
            Flat side toward back
          </text>
        </svg>

        <p class="diagram-caption">
          The needle must face the correct direction and sit
          completely inside the clamp.
        </p>
      </div>
    `,

    bobbin: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Top-loading bobbin diagram">
          <rect x="120" y="28" width="380" height="195" rx="30"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <circle cx="310" cy="125" r="72"
            fill="#edf3f6" stroke="#1d2d3f" stroke-width="5"/>

          <circle cx="310" cy="125" r="27"
            fill="#ffffff" stroke="#516170" stroke-width="4"/>

          <path d="M310 53 C385 49 417 116 380 170"
            fill="none" stroke="#b3202a" stroke-width="7"
            stroke-linecap="round"/>

          <polygon points="371,175 389,169 383,151"
            fill="#b3202a"/>

          <path d="M380 170 C418 193 456 184 474 162"
            fill="none" stroke="#b3202a" stroke-width="5"
            stroke-dasharray="9 7"/>

          <text x="310" y="20" text-anchor="middle"
            fill="#516170" font-size="16" font-weight="800">
            Follow the direction shown on your machine
          </text>
        </svg>

        <p class="diagram-caption">
          Insert the correct bobbin and draw the thread fully
          through the bobbin tension path.
        </p>
      </div>
    `,

    materials: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Fabric and needle matching diagram">
          <rect x="60" y="55" width="145" height="145" rx="18"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <path d="M75 88 C105 65 134 110 162 84
                   C178 69 189 76 196 85"
            fill="none" stroke="#b3202a" stroke-width="5"/>

          <text x="132" y="145" text-anchor="middle"
            fill="#1d2d3f" font-size="17" font-weight="800">
            Woven
          </text>

          <text x="132" y="172" text-anchor="middle"
            fill="#516170" font-size="14">
            Universal 80/12
          </text>

          <rect x="238" y="55" width="145" height="145" rx="18"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <path d="M254 82 Q275 112 295 82
                   Q315 52 336 82 Q355 111 370 82"
            fill="none" stroke="#b3202a" stroke-width="5"/>

          <text x="310" y="145" text-anchor="middle"
            fill="#1d2d3f" font-size="17" font-weight="800">
            Knit
          </text>

          <text x="310" y="172" text-anchor="middle"
            fill="#516170" font-size="14">
            Ballpoint
          </text>

          <rect x="415" y="55" width="145" height="145" rx="18"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <path d="M430 80 L545 105 M430 105 L545 80"
            stroke="#b3202a" stroke-width="5"/>

          <text x="487" y="145" text-anchor="middle"
            fill="#1d2d3f" font-size="17" font-weight="800">
            Stretch
          </text>

          <text x="487" y="172" text-anchor="middle"
            fill="#516170" font-size="14">
            Stretch needle
          </text>
        </svg>

        <p class="diagram-caption">
          Match the needle style and size to the project material.
        </p>
      </div>
    `,

    clean: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Cleaning the bobbin area diagram">
          <ellipse cx="300" cy="135" rx="130" ry="85"
            fill="#ffffff" stroke="#1d2d3f" stroke-width="5"/>

          <circle cx="300" cy="135" r="52"
            fill="#edf3f6" stroke="#516170" stroke-width="4"/>

          <path d="M112 62 L240 115"
            stroke="#b3202a" stroke-width="9"
            stroke-linecap="round"/>

          <path d="M100 48 L119 78"
            stroke="#1d2d3f" stroke-width="13"
            stroke-linecap="round"/>

          <path d="M233 109 L260 124 M230 116 L256 136
                   M225 123 L249 146"
            stroke="#b3202a" stroke-width="4"
            stroke-linecap="round"/>

          <circle cx="405" cy="82" r="5" fill="#c58a2b"/>
          <circle cx="430" cy="116" r="6" fill="#c58a2b"/>
          <circle cx="403" cy="166" r="4" fill="#c58a2b"/>
          <circle cx="190" cy="162" r="6" fill="#c58a2b"/>
        </svg>

        <p class="diagram-caption">
          Brush lint out and away from the hook area.
          Do not blow it deeper into the machine.
        </p>
      </div>
    `,

    settings: `
      <div class="diagram">
        <svg viewBox="0 0 620 255" role="img"
          aria-label="Basic straight stitch settings diagram">
          <rect x="70" y="35" width="480" height="180" rx="24"
            fill="#ffffff" stroke="#cbd7dd" stroke-width="4"/>

          <rect x="108" y="73" width="120" height="105" rx="15"
            fill="#1d2d3f"/>

          <path d="M130 126 L205 126"
            stroke="#ffffff" stroke-width="5"
            stroke-dasharray="11 8"/>

          <circle cx="315" cy="125" r="50"
            fill="#edf3f6" stroke="#516170" stroke-width="4"/>

          <line x1="315" y1="125" x2="343" y2="92"
            stroke="#b3202a" stroke-width="6"
            stroke-linecap="round"/>

          <text x="315" y="194" text-anchor="middle"
            fill="#516170" font-size="14" font-weight="700">
            Medium stitch length
          </text>

          <rect x="415" y="78" width="92" height="92" rx="15"
            fill="#f9e9ea" stroke="#b3202a" stroke-width="3"/>

          <line x1="461" y1="94" x2="461" y2="154"
            stroke="#1d2d3f" stroke-width="5"
            stroke-dasharray="8 6"/>

          <text x="461" y="194" text-anchor="middle"
            fill="#516170" font-size="14" font-weight="700">
            Center needle
          </text>
        </svg>

        <p class="diagram-caption">
          Return to a center-position straight stitch with
          a medium stitch length.
        </p>
      </div>
    `
  };

  return diagrams[type] || diagrams.settings;
}

function recordAttempt(result) {
  const step = getCurrentStep();

  const existingIndex = state.attempts.findIndex(
    (attempt) => attempt.stepId === step.id
  );

  const attempt = {
    stepId: step.id,
    title: step.title,
    result
  };

  if (existingIndex >= 0) {
    state.attempts[existingIndex] = attempt;
  } else {
    state.attempts.push(attempt);
  }
}

function goToNextStep() {
  if (state.currentStepIndex < universalSteps.length - 1) {
    state.currentStepIndex += 1;
    renderStep();
  } else {
    showServiceScreen();
  }
}

function showSuccessScreen() {
  const step = getCurrentStep();
  const machine = machines[state.selectedMachine];

  document.getElementById("success-description").textContent =
    `${machine.name} completed the test without skipping stitches.`;

  document.getElementById("successful-step-summary").textContent =
    `${step.title} resolved the skipped stitches.`;

  showScreen("success-screen");
}

function createPlainSummary() {
  const machine = machines[state.selectedMachine];

  const completed = state.attempts
    .filter((attempt) => attempt.result === "Not fixed")
    .map((attempt) => attempt.title);

  const unable = state.attempts
    .filter((attempt) => attempt.result === "Could not complete")
    .map((attempt) => attempt.title);

  const lines = [
    "SEWING MACHINE TROUBLESHOOTING SUMMARY",
    "",
    `Machine: ${machine.name}`,
    "Issue: Skipping stitches",
    ""
  ];

  if (completed.length) {
    lines.push("Steps completed without resolving the issue:");

    completed.forEach((title) => {
      lines.push(`- ${title}`);
    });

    lines.push("");
  }

  if (unable.length) {
    lines.push("Steps the customer could not complete:");

    unable.forEach((title) => {
      lines.push(`- ${title}`);
    });

    lines.push("");
  }

  lines.push(
    "Result: The machine is still skipping stitches after guided troubleshooting."
  );

  return lines.join("\n");
}

function showServiceScreen() {
  const summary = createPlainSummary();

  document.getElementById("formatted-summary").textContent =
    summary;

  document.getElementById("service-summary-field").value =
    summary;

  showScreen("service-screen");
}

function createFullServiceRequest() {
  const name =
    document.getElementById("customer-name").value.trim();

  const email =
    document.getElementById("customer-email").value.trim();

  const phone =
    document.getElementById("customer-phone").value.trim();

  const store =
    document.getElementById("preferred-store").value;

  const contact =
    document.getElementById("preferred-contact").value;

  const purchased =
    document.getElementById("purchased-from-vru").value;

  const details =
    document.getElementById("additional-details").value.trim();

  const summary =
    document.getElementById("service-summary-field").value;

  return [
    "SEWING MACHINE SERVICE REQUEST",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Preferred store: ${store || "Not selected"}`,
    `Preferred contact method: ${contact || "Not selected"}`,
    `Purchased from Vacuums R Us: ${purchased || "Not selected"}`,
    "",
    summary,
    "",
    "ADDITIONAL DETAILS",
    details || "None provided"
  ].join("\n");
}

async function copyText(text, messageElement) {
  try {
    await navigator.clipboard.writeText(text);

    messageElement.classList.remove("hidden");

    window.setTimeout(() => {
      messageElement.classList.add("hidden");
    }, 2500);
  } catch (error) {
    window.prompt(
      "Copy the text below:",
      text
    );
  }
}

document.getElementById("begin-button").addEventListener(
  "click",
  () => showScreen("brand-screen")
);

document.getElementById("home-button").addEventListener(
  "click",
  resetEverything
);

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.back);
  });
});

document.querySelectorAll("[data-brand]").forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedBrand = button.dataset.brand;

    if (state.selectedBrand === "Janome") {
      showScreen("model-screen");
    } else {
      selectMachine("generic");
    }
  });
});

document.querySelectorAll("[data-model]").forEach((button) => {
  button.addEventListener("click", () => {
    selectMachine(button.dataset.model);
  });
});

document.getElementById("issue-back-button").addEventListener(
  "click",
  () => {
    if (state.selectedBrand === "Janome") {
      showScreen("model-screen");
    } else {
      showScreen("brand-screen");
    }
  }
);

document
  .querySelector("[data-issue='skipping-stitches']")
  .addEventListener("click", () => {
    state.selectedIssue = "skipping-stitches";
    state.currentStepIndex = 0;
    state.attempts = [];
    showScreen("precheck-screen");
  });

const precheckConfirmation =
  document.getElementById("precheck-confirmation");

precheckConfirmation.addEventListener("change", () => {
  document.getElementById("begin-steps-button").disabled =
    !precheckConfirmation.checked;
});

document.getElementById("begin-steps-button").addEventListener(
  "click",
  renderStep
);

document.getElementById("fixed-button").addEventListener(
  "click",
  () => {
    recordAttempt("Fixed");
    showSuccessScreen();
  }
);

document.getElementById("continue-button").addEventListener(
  "click",
  () => {
    recordAttempt("Not fixed");
    goToNextStep();
  }
);

document
  .getElementById("cannot-complete-button")
  .addEventListener("click", () => {
    recordAttempt("Could not complete");
    goToNextStep();
  });

document
  .getElementById("previous-step-button")
  .addEventListener("click", () => {
    if (state.currentStepIndex > 0) {
      state.currentStepIndex -= 1;
      renderStep();
    }
  });

changeMachineButton.addEventListener("click", () => {
  state.selectedBrand = null;
  state.selectedMachine = null;
  resetTroubleshooting();
  showScreen("brand-screen");
});

document
  .getElementById("troubleshoot-another-button")
  .addEventListener("click", () => {
    resetTroubleshooting();
    showScreen("issue-screen");
  });

document
  .getElementById("service-start-over-button")
  .addEventListener("click", resetEverything);

document
  .getElementById("copy-summary-button")
  .addEventListener("click", () => {
    copyText(
      createPlainSummary(),
      document.getElementById("copy-message")
    );
  });

document
  .getElementById("copy-request-button")
  .addEventListener("click", () => {
    copyText(
      createFullServiceRequest(),
      document.getElementById("request-copy-message")
    );
  });

const emailDialog =
  document.getElementById("email-dialog");

const emailPreviewText =
  document.getElementById("email-preview-text");

document
  .getElementById("preview-email-button")
  .addEventListener("click", () => {
    emailPreviewText.value = createFullServiceRequest();
    emailDialog.showModal();
  });

document
  .getElementById("close-email-dialog")
  .addEventListener("click", () => {
    emailDialog.close();
  });

document
  .getElementById("copy-email-button")
  .addEventListener("click", () => {
    copyText(
      emailPreviewText.value,
      document.getElementById("request-copy-message")
    );
  });

document
  .getElementById("open-email-button")
  .addEventListener("click", () => {
    const machineName =
      machines[state.selectedMachine].name;

    const subject =
      `Sewing Machine Service Request — ${machineName}`;

    const body = createFullServiceRequest();

    window.location.href =
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

emailDialog.addEventListener("click", (event) => {
  if (event.target === emailDialog) {
    emailDialog.close();
  }
});

document
  .getElementById("service-request-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
  });
