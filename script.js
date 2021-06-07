//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////
let name = "";
let state = "";
let travelLocation = "";
let travelTime = "";
let score;
const messages = {
  A: "Hi! Welcome to 'The Great 2020 Escape Game'. What's your name?",
  B: `Hi ${name}, we’re excited about our travel plans this year! Let's keep the vision splendid - 2020.`,
  C: "What state do you live in?",
  D: `Thanks, ${state} is beautiful!`,
  E1: "Do you have travel plans this year? (Y/N)",
  F1: "What season are you planning to travel in?",
  F2: "Would you like to make travel plans? (Y/N)",
  F3: "Oh, I have another call coming in...  Uh, gotta go! Bye! Stay safe this year.",
  G1: "That's a great time to go! Where are you planning to go?",
  H: "WHO Announces Mysterious Coronavirus-Related Pneumonia in Wuhan, China",
  H1: "Are you worried? (Y/N)",
  H2: "Stop freaking out.  It's too soon.",
  I: "CDC Confirms First US Coronavirus Case",
  I1: "Are you worried? (Y/N)",
  I2: "I'm starting to get worried too.",
  J: "Global Air Travel Is Restricted & US Declares Public Health Emergency",
  J1: "Are you worried now? (Y/N)",
  J2: "This is starting to get a little scary.  I'm definitely worried.",
  J3: "I'm glad you're still calm.",
  K: "WHO Declares COVID-19 a Pandemic",
  K1: "Are you worried now? (Y/N)",
  K2: "You're worried like a lot of others.  We're sweating balls!",
  K3: "Geez!  You've got nerves of steel!",
  L: `Community spread in your area.  ${state} Issues Statewide Stay-at-Home Order.  Can you stay at home? (Y/N)`,
  L1: "Glad to hear!",
  M: "CDC asks that Americans follow local and state guidance on prevention strategies, such as social distancing, good hand hygiene, and wearing a face mask while in public. Will you follow these guidelines? (Y/N)",
  M1: "Good thinking!  Let's play it safe.",
  N: "Will you stay six feet apart from others that are not a part of your household? (Y/N)",
  N1: "Good.  It's best to follow the guidelines.",
  O: "Will you wash your hands for 20 seconds? (Y/N)",
  O1: "I definitely will too, and I even sing the birthday song for the 20 seconds!",
  P: "Will you wear a face mask while in public? (Y/N)",
  P1: "Thank goodness.  I found face masks to match all my outfits!",
  Q: `Travel ban for ${travelLocation}. Will you postpone your travel plans? (Y/N)`,
  Q1: "Good thinking! Better to be safe than sorry!",
  R: "An old friend who is traveling the country is in town. Do you let them stay with you? (Y/N)",
  R1: "Covid is a bit of a bummer for our social plans but we want to be safe! Try scheduling Zoom calls with family & friends to make up for the void!",
  S: "They're at your house and they don't like wearing masks. They ask to go out to a bar for old times sake.  Do you go? (Y/N)",
  S1: "You go out and try to have fun.  Do you still observe COVID-related safety measures? (Y/N)",
  S3: "It's good that you're at least playing it safe while socializing.  Your friend makes fun of you, but they think that COVID is a joke so who cares.",
  S4: "You throw all caution to the wind and party like you're 21 again. You don't remember who you were around or all the places you went, but you had fun.",
  S2: "You decide against going out, despite your friend's protests. They're dissapointed, but you feel like staying home is the only responsible option.",
  T: "A few days later, a YouTube influencer asks to fly you out to collaborate on a new video. You don't know why they asked you, but it would be an amazing opportunity for exposure.  Do you go? (Y/N",
  T1: "You refuse, now just isn't the time to be flying around the country to be in a video. You receive word that the influencer was Jake Paul and he won't be asking to collaborate again. Good, tragedy avoided.",
  T2: "You land in Calabasas. You get off the plane and see a driver holding a sign with your name on it. He says he works for Jake Paul, one of the most disliked influencers on YouTube and someone who has called COVID a hoax. Do you accept the ride to his house? (Y/N)",
  T3: "You turn on the spot and buy a plane ticket back home. You might be desperate for exposure, but you're not that desperate.",
  T4: "This was a mistake, you get to his mansion and no one has a mask on. To make things worse, the video is for his new song and all you do is dance around a pool. The song is bad and you feel bad about it.",
  U1: `You've made a lot of responsible choices.  You waited safely until you got vaccinated.  Congratulations!  Now, you can go on your great escape to ${travelLocation} next ${travelTime}.  Stay winning and enjoy!`,
  U2: "We're so sorry, but you made some poor decisions.  Now, you have Covid and have to quarantine.  Game over.  Get well soon!",
}

function beginGame() {
  name = prompt(messages.A, `there`);
  alert(`Hi ${name}, we’re excited about our travel plans this year! Let's keep the vision splendid - 2020.`);
  generalInfo();
  return (0);
}

function generalInfo() {
  score = 11;
  state = prompt(messages.C, `your state`);
  alert(`Thanks, ${state} is beautiful!`);
  let plans = confirm(messages.E1);
  if (plans === true) {
    travelTime = prompt(messages.F1, `Fall`);
    travelLocation = prompt(messages.G1, `Wuhan`);
  }
  else {
    plans = confirm(messages.F2)
    if (plans === true) {
      travelTime = prompt(messages.F1, `Fall`);
      travelLocation = prompt(messages.G1, `Wuhan`);
    }
  }
  if (plans === false) {
    alert(messages.F3);
    process.exit(1);
  }
  virusStart();
  return (0);
}

function virusStart() {
  alert(messages.H);
  let worried = confirm(messages.H1);
  if (worried === true) {
    alert(messages.H2);
  }
  alert(messages.I);
  if (worried === true) {
    alert(messages.I2);
  }
  else {
    worried = confirm(messages.I1)
    if (worried === true) {
      alert(messages.I2);
    }
  }
  alert(messages.J)
  if (worried === false) {
    worried = confirm(messages.J1);
    if (worried === true) {
      alert(messages.J2);
      scoreStart();
    }
    else {
      alert(messages.J3);
    }
  }
  else {
    alert(messages.J2);
  }

  alert(messages.K);
  if (worried === false) {
    worried = confirm(messages.K1);
    if (worried === true) {
      alert(messages.K2);
      scoreStart();
    }
    else {
      alert(messages.K3);
    }
  }
  else {
    alert(messages.K2);
    scoreStart();
  }
  scoreStart();
  return (0);
}

function scoreStart() {
  let stayAtHome = confirm(`Community spread in your area.  ${state} Issues Statewide Stay-at-Home Order.  Can you stay at home? (Y/N)`)
  if (stayAtHome === true) {
    alert(messages.L1);
  }
  if (stayAtHome === false) {
    score--;
  }
  let guidelines = confirm(messages.M)
  if (guidelines === true) {
    alert(messages.M1);
  }
  if (guidelines === false) {
    score--;
  }
  let socialDistancing = confirm(messages.N)
  if (socialDistancing === true) {
    alert(messages.N1);
  }
  if (socialDistancing === false) {
    score--;
  }
  let handWash = confirm(messages.O)
  if (handWash === true) {
    alert(messages.O1);
  }
  if (handWash === false) {
    score--;
  }
  let mask = confirm(messages.P)
  if (mask === true) {
    alert(messages.P1);
  }
  if (mask === false) {
    score--;
  }
  let postpone = confirm(`Travel ban for ${travelLocation}. Will you postpone your travel plans? (Y/N)`)
  if (postpone === true) {
    alert(messages.Q1);
  }
  if (postpone === false) {
    score--;
  }
  splitPaths1();
  return (0);
}

function splitPaths1() {
  let stay = confirm(messages.R);
  if (stay === false) {
    alert(messages.R1);
  }
  if (stay === true) {
    score--;
    let goOut = confirm(messages.S);
    if (goOut === false) {
      alert(messages.S2);
    }
    if (goOut === true) {
      score--;
      let measures = confirm(messages.S1);
      if (measures === false) {
        score--;
        alert(messages.S4);
      }
      else {
        alert(messages.S3);
      }
    }
  }
  splitPaths2(score);
  return (0);
}

function splitPaths2(score) {
  let doVideo = confirm(messages.T);
  if (doVideo === false) {
    alert(messages.T1)
  }
  else {
    score--;
    let acceptRide = confirm(messages.T2);
    if (acceptRide === false) {
      alert(messages.T3);
    }
    else {
      score--;
      alert(messages.T4);
    }
  }
  pointEvaluation(score);
  return (0);
}

function pointEvaluation(score) {
  if (score >= 7) {
    alert(`You've made a lot of responsible choices.  You waited safely until you got vaccinated.  Congratulations!  Now, you can go on your great escape to ${travelLocation} next ${travelTime}.  Stay winning and enjoy!`);
  }
  else {
    alert(messages.U2);
  }
  process.exit(1);
  return (0);
}