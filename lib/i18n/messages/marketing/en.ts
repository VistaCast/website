import type { MarketingMessages } from '../../marketing-types'

const marketingEn: MarketingMessages = {
  contactCta: 'Contact us for a quote',
  contactSubject: 'VistaCast solution inquiry',
  exampleTag: 'Example — replace with your figures',
  relatedLabel: 'Related pages',
  aoi: {
    metaTitle: 'Inspection, AOI-lite',
    metaDescription:
      'Camera assistance for visual inspection stations: surface-visible solder signs, evidence, traceability, and human review. Not a replacement for full-line high-speed AOI, and not a view under BGA or QFN.',
    ogAlt: 'VistaCast inspection AOI-lite: station assistance, evidence, and traceability',
    kicker: 'Inspection',
    title: 'Camera assistance where a standard AOI does not reach',
    lead: 'The station package is for benches that are still inspected by eye, and for positions a standard machine covers poorly: odd-form insertion, visual checks after wave solder, and pack review. The camera sees only what is on the surface. A person makes the call on the review bench. Records stay on your site.',
    boundaryTitle: 'What a camera can see, and what it cannot',
    boundaryBody:
      'A camera can only see surface-visible defects. Poor wetting, a dull grainy surface, and an abnormal fillet are in that visible range. We call those visible signs of a poor solder joint. Joints under a BGA or QFN, internal voids, and head-in-pillow are not visible. Those need X-ray, ICT, or a functional test. This does not replace full-line high-speed AOI. It covers stations a standard machine does not cover, and stations that are still inspected by eye.',
    cards: [
      {
        title: 'After SMT reflow',
        body: 'Looks at visible signs of a poor solder joint, bridges, and insufficient solder. Missing, shifted, or tombstoned parts can be reviewed at the same station. The board sits on a fixed fixture, or the line stops before the photo. No high-speed flying capture.',
      },
      {
        title: 'After wave solder',
        body: 'Looks at bridges, through-hole fill, and missed joints. Camera placement follows your line. It is not a copy of the SMT setup. Fill is judged on the component side, by whether solder has climbed onto the pad. Bridges and missed joints are judged on the solder side.',
      },
      {
        title: 'Pack review',
        body: 'Looks at presence, count, and whether the pack is closed, and keeps the barcode or lot on that record. Barcodes are decoded by a deterministic library. A language model is not used to make the call.',
      },
    ],
    methodTitle: 'How a call is made',
    methodBody:
      'Deterministic algorithms plus small models: alignment, solder area, whether neighboring pads are connected, and a range learned from good boards. Run the same image again and the result matches. The cost stays on an ordinary computer at the station. A large language model is not used to make the call.',
    smtTitle: 'Where to photograph SMT',
    smtLead: 'Photograph after boards leave the reflow oven. Start with an offline fixture. The drawing shows placement, not a machine layout.',
    smtFlowLabel: 'Capture order after SMT reflow',
    smtFlow: ['Reflow oven', 'Boards leave the oven', 'S1 or S2'],
    smtSteps: [
      {
        id: 'S1',
        title: 'Offline station',
        recommended: true,
        body: 'An operator places the board on a fixed fixture and triggers with a scanner or a foot switch. The camera looks down. This fits high-mix, low-volume work. The conveyor stays as it is. The fixture holds position. Time per board is measured on your floor during the survey.',
      },
      {
        id: 'S2',
        title: 'Inline stop-and-go',
        recommended: false,
        body: 'A stop after the oven holds the board, then the camera fires. This fits a line with a steady rhythm. A large board can be split across several cameras. No XY stage, and no high-speed flying capture.',
      },
    ],
    waveTitle: 'Where to photograph wave solder',
    waveLead: 'Photograph at the exit, after cooling, not inside the wave. Read the line first, then place the camera.',
    waveFlowLabel: 'Wave-solder line and three camera positions',
    waveFlow: ['Insert', 'Pallet', 'Flux', 'Preheat', 'Wave', 'Cool', 'Exit'],
    waveSteps: [
      {
        id: 'W1',
        title: 'Offline visual station',
        recommended: true,
        body: 'After cooling, an operator takes the board, puts the solder side up on a fixture, and triggers with a scanner or a foot switch. The camera looks down. This sees bridges and missed joints on the solder side. Most small lines do not need a conveyor change.',
      },
      {
        id: 'W2',
        title: 'Component side, inline, looking down',
        recommended: false,
        body: 'The camera sits above the exit conveyor and fires when the board is in place. It is mainly for through-hole fill and missing parts. It does not block the pallet. This view does not see bridges.',
      },
      {
        id: 'W3',
        title: 'Solder side, inline, looking up',
        recommended: false,
        body: 'A window is left in the conveyor and the camera looks up from below. That needs a mechanical change. If the pallet hides the solder side, the pallet needs a window too. Consider this only if you are willing to change the machine and the builder can help.',
      },
    ],
    waveAdvice: 'Start with W1 so the solder side is fully in view. Add W2 later, once the line is stable, to watch fill inline. W3 is not the starting point.',
    outcomesTitle: 'Records and process',
    outcomes: [
      {
        title: 'Evidence',
        body: 'The image and the marks for that board stay on your site, for review and for later checks.',
      },
      {
        title: 'Serial traceability',
        body: 'Find that record from the board barcode, work order, lot, or shift.',
      },
      {
        title: 'Review bench',
        body: 'A person marks pass, defect, or hold, and the record shows who changed it. Keep a human final check on high-risk stations.',
      },
      {
        title: 'First-pass yield and a defect Pareto',
        body: 'See the mix of defects and first-pass yield by shift. The rates come from your own records. This page does not publish a rate.',
      },
      {
        title: 'Process settings, side by side',
        body: 'Line up wave or reflow settings with defect changes over time, and only suggest what to check, such as preheat, chain speed, or wave height. Nothing is written to the machine. Line speed is not changed.',
      },
    ],
    recommendedLabel: 'Start here',
    pocNote: 'Before a paid rollout, collect for two weeks. Collection and human review only, on your own boards, to see whether the person and the algorithm agree. No promise of how much will be found, and no percentage. The steps are on the pricing page.',
  },
  warehouse: {
    metaTitle: 'Warehouse security',
    metaDescription:
      'Use the cameras already in the warehouse for after-hours entry and offline cameras, and fold repeated alerts into one event. Includes an arming schedule, an evidence pack, and shift handover.',
    ogAlt: 'VistaCast warehouse security: after-hours entry, offline cameras, grouped alerts, and shift handover',
    kicker: 'Warehouse security',
    title: 'When someone enters at night, the person on duty knows which camera',
    lead: 'The warehouse package uses the ONVIF / RTSP cameras you already installed. It starts with three problems: after-hours entry, a camera going offline, and the same event pushed again and again. A person on duty handles the alert.',
    boundaryTitle: 'Limits',
    boundaryBody:
      'A camera sees only what it is pointed at. You choose the armed hours by shift, and ordinary work hours can stay quiet. This page does not promise a watching schedule, and it does not say how false alerts will change. Repeated alerts are folded into one event so a person can handle them. That is not a percentage.',
    cards: [
      {
        title: 'After-hours entry',
        body: 'When someone enters the warehouse, an aisle, a closed zone, or the perimeter, the person on duty is notified, with the camera named.',
      },
      {
        title: 'Offline',
        body: 'When a camera drops, the person on duty knows which one at the time, instead of finding an empty recording later.',
      },
      {
        title: 'Less noise, one event',
        body: 'Repeated alerts from the same camera and the same type, inside a time window, become one event. A false alert can be marked, and that mark can inform a later suggestion about a zone or a threshold. The suggestion does not change your rules by itself.',
      },
      {
        title: 'Arming schedule',
        body: 'A week calendar and exception days decide when the site is armed, together with the zones you already drew.',
      },
      {
        title: 'Evidence pack',
        body: 'Clips before and after the event, stills, a timeline, and the handling notes can be exported for handover or a later check.',
      },
      {
        title: 'Shift handover',
        body: 'What alerted this shift, what is still open, and which cameras are offline, passed to the next shift.',
      },
    ],
    methodTitle: 'Records stay on site',
    methodBody:
      'Video and event records stay on your machines by default. Notices can go to the chat you already use. Whether a person entered is decided by scene rules and small models. A large language model is not used for that call.',
    formulaTitle: 'How events are grouped',
    formulaBody:
      'The same camera and the same event type, inside a window you set, become one event waiting to be handled. The window is set from your floor. This page does not lock it to a number of minutes.',
  },
  retail: {
    metaTitle: 'Store operations',
    metaDescription:
      'Match footfall to orders, then look at conversion, queues, and differences between stores. A short daily note is built from rules. This page does not state an unverified lift as fact.',
    ogAlt: 'VistaCast store operations: footfall, conversion, queues, and store comparison',
    kicker: 'Stores',
    title: 'Footfall is useful once it meets the orders',
    lead: 'The store package starts with people entering. Conversion is calculated only after you bring in order counts. Queues, store comparison, and the daily note all use those same numbers. The note is assembled by rules. A large language model is not used to make the call.',
    boundaryTitle: 'Limits',
    boundaryBody:
      'Footfall is the count at the door, not the receipt. Without order data, you see footfall only. Conversion is not invented. This page does not say conversion will rise by any amount. To estimate money under your own assumption, open the ROI calculator and replace the example figures.',
    cards: [
      {
        title: 'Footfall to conversion',
        body: 'Orders can start from a sales export you already have. Entries and orders are compared on the same hours.',
      },
      {
        title: 'Queues',
        body: 'Watch dwell in a queue zone you draw, to see whether a busy hour is blocking the door.',
      },
      {
        title: 'Store comparison',
        body: 'The same definitions show entries and conversion across stores. A store that sits apart from the others is marked so operations can ask why.',
      },
      {
        title: 'Daily note',
        body: 'Rules turn that day’s entries, conversion, peak, and queue into a few short lines for the store manager. The lines come from those numbers.',
      },
    ],
    methodTitle: 'Where the daily note comes from',
    methodBody:
      'By default, rules turn the structured numbers into short lines. A large language model is not used to judge the day. The work runs in the software on your site.',
    formulaTitle: 'How conversion is defined',
    formulaBody:
      'Conversion = orders ÷ entries. That is a definition, not an effect. Orders come from your sales records. Entries come from the door count.',
  },
  pricing: {
    metaTitle: 'Plans and billing',
    metaDescription:
      'Inspection is billed per station, warehouse security per camera, stores per store. Subscription and a one-time license are quoted side by side. This page lists no prices. Two weeks of collection, then a review, then a rollout.',
    ogAlt: 'VistaCast plans and billing: per station, per camera, per store, subscription beside a one-time license',
    kicker: 'Plans and billing',
    title: 'Quoted per station, per camera, or per store',
    lead: 'The three packages describe the billing unit and what is in scope. The amount is quoted after a site survey and a collection period. Subscription and a one-time license are both offered, so you can match how you buy.',
    noPrice: 'This page leaves prices out on purpose. A figure still has to be checked on a real site. Putting one here would look like a quote that has not been confirmed.',
    billingTitle: 'Subscription and a one-time license, side by side',
    subscribeTitle: 'Subscription',
    subscribeBody: 'A monthly fee. Inspection per station, warehouse security per camera, stores per store. Stop the monthly fee for a unit you no longer use.',
    buyoutTitle: 'One-time license',
    buyoutBody:
      'A one-time license for the same scope. Later software updates and support are billed yearly, and are not inside the one-time amount. Choose this if you would rather buy software the way you buy equipment. Both options are quoted.',
    hardwareNote:
      'Industrial cameras, lenses, lights, and the station computer for inspection are purchased by you. They are not bundled into the software. Warehouse and store sites should start with the ONVIF / RTSP cameras already there.',
    includesLabel: 'In scope',
    packages: [
      {
        name: 'Inspection station',
        unit: 'Unit: station. Subscription is per station each month. A one-time license is per station.',
        summary: 'For eye-inspection stations and positions a standard AOI does not cover. Not a replacement for full-line high-speed AOI.',
        includes: [
          'Recipes and the review bench for that station',
          'Defect evidence and serial traceability on your site',
          'First-pass yield and a defect Pareto',
          'Process settings side by side: suggestions only, nothing written to the machine',
        ],
      },
      {
        name: 'Warehouse security',
        unit: 'Unit: camera. Subscription is per camera each month. A one-time license is per camera.',
        summary: 'For warehouse cameras you already installed. Billed per camera, not as one price for the whole building.',
        includes: [
          'After-hours entry and offline notices',
          'Alerts grouped into events',
          'Arming schedule',
          'Evidence pack and shift handover',
        ],
      },
      {
        name: 'Store',
        unit: 'Unit: store. Subscription is per store each month. A one-time license is per store.',
        summary: 'Several stores can be scoped together. How they are grouped is written on the quote, not on this page.',
        includes: [
          'Footfall',
          'Conversion once orders are matched',
          'Queue dwell',
          'Store comparison and a rules-based daily note',
        ],
      },
    ],
    pocTitle: 'From collection to a rollout',
    pocLead: 'Inspection, warehouse, and stores all start on your own floor. Inspection collection runs for two weeks.',
    pocSteps: [
      {
        title: 'Survey',
        body: 'Camera position, light or night conditions, rhythm or shifts, the cameras you have, and signals you can use, such as a photoeye or a barcode scanner. For inspection, joints that need X-ray or ICT are marked.',
      },
      {
        title: 'Two weeks of collection',
        body: 'For inspection, these two weeks are collection and human review only. There is no promise of how much will be found. Warehouse and stores likewise start by gathering your own events or footfall.',
      },
      {
        title: 'Review',
        body: 'Your records show whether the person and the algorithm agree, and what still needs to change. The report does not use a percentage.',
      },
      {
        title: 'Rollout',
        body: 'Sign per station, per camera, or per store. Subscription and a one-time license are quoted side by side. Inspection agrees who does the human review.',
      },
    ],
    contactTitle: 'Contact us for a quote',
    contactBody:
      'Tell us whether the site is inspection stations, warehouse cameras, or stores, and which city. The quote follows the survey. There is no price list on the website. You can also open the ROI calculator and replace the example costs with yours.',
  },
  roi: {
    metaTitle: 'ROI calculator',
    metaDescription:
      'Estimate from your own headcount, output, footfall, or theft loss. Every assumption is editable, and the formulas are on the page. Example figures are not measurements and not a promise.',
    ogAlt: 'VistaCast ROI calculator: your assumptions, formulas shown',
    kicker: 'ROI calculator',
    title: 'Estimate with your numbers',
    lead: 'All three calculators run in this browser. Nothing is sent to a server. The starting numbers are examples. The percentages are your assumptions. Set one to 0 and the result uses 0.',
    banner: 'Example — replace with your figures',
    disclaimer:
      'Results use only the formulas below and the numbers you type. They are not a measurement and not a promise of effect. Leave the annual fee empty until you have a quote. While it is empty, payback is not calculated, so this page does not show a price.',
    currencyLabel: 'Currency symbol',
    currencyHint: 'Example. Display only. No exchange rate is applied.',
    qualityTitle: 'Inspection',
    qualityLead: 'The starting labor and escape percentages are not based on a study. They only let the formula show an example. Replace them with your judgment, or set them to 0.',
    qualityFormula: [
      'Annual inspection labor = inspectors × monthly pay × 12',
      'Annual escape payout = daily output × working days × payout per escape × assumed current escape share',
      'Annual saving = annual inspection labor × assumed labor reduction + annual escape payout × assumed share of payout avoided',
      'Payback months = annual fee ÷ (annual saving ÷ 12). Calculated only after you enter a fee and only when annual saving is above 0.',
    ],
    retailTitle: 'Stores',
    retailLead: 'The starting conversion lift is 1 percentage point, only to show the formula. It is not a result after use.',
    retailFormula: [
      'Annual added revenue = daily entries × open days × average ticket × (assumed conversion lift in percentage points ÷ 100)',
      '1 percentage point means one more purchase for every one hundred people who enter. That is an assumption, not a measurement.',
      'Payback months = annual fee ÷ (annual added revenue ÷ 12). Calculated only after you enter a fee and only when added revenue is above 0.',
    ],
    warehouseTitle: 'Warehouse',
    warehouseLead: 'The starting theft-reduction share is an example. The starting share of guard headcount removed is 0, so the example does not assume fewer guards.',
    warehouseFormula: [
      'Annual guard cost = guards × monthly guard pay × 12',
      'Annual offset = annual theft loss × assumed theft reduction + annual guard cost × assumed headcount reduction',
      'Payback months = annual fee ÷ (annual offset ÷ 12). Calculated only after you enter a fee and only when the offset is above 0.',
    ],
    fields: {
      inspectors: { label: 'Visual inspectors', hint: 'Example. A part-time person can be a decimal.' },
      monthlySalary: { label: 'Monthly pay per inspector', hint: 'Example. Your labor cost, not a software price.' },
      dailyOutput: { label: 'Daily output', hint: 'Example. Boards or pieces. Keep the unit consistent.' },
      workingDays: { label: 'Working days per year', hint: 'Example. Use your calendar.' },
      payoutEach: { label: 'Payout per escaped defect', hint: 'Example. What one escape costs in claims or rework.' },
      escapeRate: {
        label: 'Assumed current escape share (%)',
        hint: 'Example assumption. Your estimate of escapes as a share of output today. 1 means one escape in a hundred. Not a measurement of this product.',
      },
      laborCut: {
        label: 'Assumed labor reduction (%)',
        hint: 'Example assumption. 0 means no fewer inspectors. Replace it with your judgment.',
      },
      payoutCut: {
        label: 'Assumed share of payout avoided (%)',
        hint: 'Example assumption. Of the annual escape payout above, the share you assume could be avoided.',
      },
      annualFee: {
        label: 'Annual plan fee',
        hint: 'Leave empty. After you receive a quote, enter that annual fee. Do not invent a price here.',
      },
      dailyVisits: { label: 'Daily entries', hint: 'Example. People entering in a day.' },
      ticket: { label: 'Average ticket', hint: 'Example. Average amount of one order.' },
      openDays: { label: 'Open days per year', hint: 'Example. Use your store calendar.' },
      conversionLift: {
        label: 'Assumed conversion lift (percentage points)',
        hint: 'Example assumption, not a measurement. 1 means one more purchase for every one hundred people who enter.',
      },
      theftLoss: { label: 'Annual theft loss', hint: 'Example. Your current yearly theft or shrinkage.' },
      guards: { label: 'Guards', hint: 'Example.' },
      guardSalary: { label: 'Monthly pay per guard', hint: 'Example. Your labor cost, not a software price.' },
      theftCut: {
        label: 'Assumed theft reduction (%)',
        hint: 'Example assumption. 0 means you are not assuming theft will fall.',
      },
      guardCut: {
        label: 'Assumed guard reduction (%)',
        hint: 'Example. Starts at 0, so the example does not assume fewer guards.',
      },
    },
    annualLabor: 'Annual inspection labor',
    annualEscape: 'Annual escape payout',
    annualSaving: 'Annual saving under the current assumption',
    annualUplift: 'Annual added revenue under the current assumption',
    annualOffset: 'Annual offset under the current assumption',
    guardAnnual: 'Annual guard cost',
    monthly: 'Per month',
    payback: 'Payback',
    months: 'months',
    paybackNeedQuote: 'Enter the annual fee from your quote to calculate payback.',
    paybackNoBenefit: 'Under the current assumption, yearly benefit is not above 0, so payback cannot be calculated.',
    invalid: 'Check the numbers: counts and amounts cannot be negative, and percentages must be from 0 to 100.',
    formulaHeading: 'Formula',
  },
}

export default marketingEn
