// Data source for top4-ideas.html - full Notion content for the 4 "Now" tier ideas
window.__IDEAS__ = [
  // ============================================================
  // IDEA 1 - Stack Overflow for Fabricators (R14)
  // ============================================================
  {
    id: 'R14',
    title: 'Stack Overflow for Fabricators',
    eyebrow: 'Now tier · Knowledge commons',
    analogue: 'Stack Overflow, for stainless steel fabrication',
    logo: 'Stack Overflow.png',
    icon: '💬',
    tagline: 'A voice-first, vernacular Q&A commons where every question asked once is answered forever.',
    revenue: '₹2,70,000',
    sections: [
      {
        eyebrow: '① How big is this problem?',
        title: 'The problem',
        type: 'problemTable',
        data: [
          {
            quote: `"I'm stuck right now, mid-job" - which grade, which rod, which finish.`,
            jsa: `Fabricators improvise on the clients' material. Quality fails, SS reputation suffers.`,
            opp: `What if every fabricator had an expert in their pocket? Voice-first, vernacular, answers in minutes.`
          },
          {
            quote: `"I learnt this once but forgot..."`,
            jsa: `JSA answers repeated questions every day, one fabricator at a time, and every answer evaporates.`,
            opp: `What if every question asked once was answered forever? A searchable commons that compounds into a JSL-owned asset.`
          },
          {
            quote: `A fabricator gets conflicting advice. The steel dealer says one grade, a fellow fabricator says another.`,
            jsa: `Verification is a national bottleneck. No way to tell good guidance from bad.`,
            opp: `What if JSA-verified answers became the trust standard? Accepted answers, expert badges, one source of truth.`
          },
          {
            quote: `No way to prove you're good. Every fabricator says "yes, I can do it".`,
            jsa: `Skill is invisible, so the market can't reward it. Good and bad fabricators get paid the same.`,
            opp: `What if reputation became a portable credential? Earned through answers and work history, visible to contractors who hire.`
          },
          {
            quote: `Solving alone. Someone fixed this exact problem last year; they'll never meet.`,
            jsa: `Every solution is lost.`,
            opp: `How might peer answers, shared job photos, etc. help knowledge travel?`
          }
        ]
      },
      {
        eyebrow: '② Who is this for, and what is it?',
        title: 'Who this is for & the product concept',
        type: 'paragraphs',
        data: [
          `Two fabricator segments benefit. We start with the harder one.`,
          `The road-side fabricator (primary). Self-taught, runs his own shop, never says no to a job. Owns a smartphone and speaks Tamil, Bengali, Bhojpuri, or another regional language, not English or Hindi.`,
          `The client-side fabricator (secondary). Works contracted and industrial jobs (bridges, plants, JSL client projects). Better supported today, but gains certified technique references and problem solving mid-job.`,
          `A voice-first, vernacular Q&A commons where every question asked once is answered forever. Answers verified by JSA, trust built through reputation, and skill made visible to the market.`
        ]
      },
      {
        eyebrow: '③ Why will fabricators show up?',
        title: 'Why fabricators will show up',
        type: 'groups',
        intro: `Money gets him in. Reputation keeps him in. Q&A makes him better. And makes JSL smarter.`,
        data: [
          {
            heading: 'Why he joins (direct money)',
            items: [
              `Job leads, named and local: "JSA has 15 SS jobs in Hisar this month - 3 near you." Real demand routed through the platform from JSL dealers, clients, and the Academy network`,
              `Quote confidence: what to charge for this gate, this railing - material estimate + current rates, so he stops underpricing`
            ]
          },
          {
            heading: 'Why he stays (indirect money)',
            items: [
              `Skill made visible = better pay. Today every fabricator says "yes I can do it" and gets paid the same; a verified profile lets good work finally command a premium`,
              `Reputation leads to priority access to better jobs. Higher tiers surface first when customers and contractors search. The job access is the reason to stay`,
              `"How to earn more" content: finding customers, loans, government schemes - the entrepreneur layer`,
              `Learning drops: see what courses peers are taking, what certifications they're earning - ambient pull toward the skills ladder`
            ]
          },
          {
            heading: 'Why he contributes (social value)',
            items: [
              `Instant credential: JSA-verified badge - digital card + physical sticker for the shop. The sticker matters: visible status in the locality, and it advertises the platform to every walk-in customer`,
              `"Ustad Master" certificate - printable, frameable, something families and the locality recognize. In a self-taught trade with no formal credentials, this is the first paper that says you are a master`,
              `Recognition loops: "3 fabricators in your area learned this weld technique from you" / "You're in the top 10% in Hisar"`
            ]
          }
        ]
      },
      {
        eyebrow: '④ What does JSL get?',
        title: 'The prize for JSL',
        type: 'mixed',
        data: [
          {
            type: 'table',
            headers: ['Revenue stream', 'Conservative pilot assumption', '6-month pilot'],
            totalRowIndex: 3,
            data: [
              ['Brand placement on answer pages', '3 brands x ₹5,000/month flat slot', '₹90,000'],
              ['Category sponsorship ("Kitchen & Plumbing by [Brand]")', '2 categories x ₹10,000/month', '₹1,20,000'],
              ['Hire verification (contractors verify before hiring)', '5 clients x 2 checks/month x ₹1,000', '₹60,000'],
              ['Total', '', '₹2,70,000']
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `If ~100 fabricators in one cluster generate ₹45k/month from 3 advertisers, 2 sponsors, and 5 contractors, what do 10,000 or 40,000 active fabricators generate with regional and national brands?`
            ]
          },
          {
            heading: 'Additional benefits',
            type: 'feat',
            data: [
              `Every question is demand intelligence: what's being built, where, with what grade`,
              `Reputation data identifies the best fabricators for JSL's clients and projects`,
              `JSL-owned asset that compounds`,
              `JSL can seed its course content here`
            ]
          }
        ]
      },
      {
        eyebrow: '⑤ What does this look like in practice?',
        title: `From a fabricator's perspective: designed for how fabricators actually learn`,
        type: 'list',
        data: [
          `Voice in, voice out. The interaction format is the WhatsApp voice note he already sends all day`,
          `A face on every answer. Answers carry the name and photo of JSA master trainers, the ustaad relationship, digitized`,
          `Private by default. Questions are private; answers are published anonymized. He gets help without status risk; the commons still accumulates`,
          `Introduced by humans. First use happens in the shop, guided by JSA's regional training partners, not by a notification`
        ]
      },
      {
        eyebrow: '⑥ Go-to-market',
        title: `From JSA's perspective: the cold-start plan`,
        type: 'steps',
        intro: `"We cold-start income in one cluster and the community forms around it."`,
        data: [
          {
            title: 'JSA seeds the base',
            body: `Find 15 live SS jobs (BD to MSMEs). Onboard 50 to 100 fabricators in person, photograph their shop, log their best work, create their profile for them. Use the regional training partner to enrol. Pre-load the top 100 questions from the TNA and trainer experience, answered and verified before launch. Day one, it's already useful.`
          },
          {
            title: 'AI answers the long tail',
            body: `No empty-forum problem: the AI responds instantly, so the platform works even with zero contributors.`
          },
          {
            title: 'Trainers and the ~100 ITI-trained students are the first contributors',
            body: `Badged as verified experts.`
          },
          {
            title: 'Fabricators contribute for status',
            body: `Stack Overflow proved reputation is enough; here it's stronger because reputation converts to income: a profile that wins customers.`
          },
          {
            title: 'Leverage influencers',
            body: `Recognition rituals. Answer-of-the-week, regional leaderboards, shout-outs through the training partner network.`
          }
        ]
      },
      {
        eyebrow: '⑦ Research and testing plan',
        title: 'How we test it',
        type: 'mixed',
        data: [
          {
            type: 'glance',
            data: [
              { label: 'Where', val: 'Hisar cluster' },
              { label: 'Who', val: 'Wave 1: 75 fabricators enrolled in person; Wave 2: expand to 500 via WhatsApp if retention clears the bar' },
              { label: 'How long', val: '6 months: 4 weeks ground research, 4 weeks build & seed, 8 weeks live pilot, 8 weeks scale + revenue test' },
              { label: 'Success bar', val: '>=60% of Wave 1 still active in week 4' },
              { label: 'Revenue test', val: '3 brands + 2 sponsors + 5 contractors paying real money by month 6' }
            ]
          },
          {
            heading: 'Phase 0 - Ground research (weeks 1-4)',
            type: 'table',
            headers: ['#', 'Question answered', 'Method', 'Output'],
            data: [
              ['1', `Are "stuck mid-job" moments real and frequent?`, `Shadow 10 to 15 Hisar fabricators, 1 week each (2 researchers x 2 weeks); log doubt-moments, last 3 redone jobs, last 5 questions asked (who/how fast/was it right)`, `Doubt-frequency baseline + current-channel map`],
              ['2', `What are the top 20 real questions?`, `Extracted from shadowing + trainer interviews + TNA`, `The seed content list, ranked by frequency`],
              ['3', `Does vernacular voice AI work on real speech?`, `Collect 100+ voice notes during shadowing (real accents, workshop noise); run through the AI stack`, `Transcription + intent accuracy %; go/no-go on voice-first`],
              ['4', `Do job leads exist in Hisar?`, `Count committed leads from dealers, Academy network, BD-to-MSMEs; get 15+ in writing`, `Confirmed lead pipeline (the adoption fuel)`],
              ['5', `How do they actually price?`, `Sit through 5 customer negotiations`, `Quote-tool design input + pricing-anxiety validation`]
            ]
          },
          {
            heading: 'Phase 1 - Build & seed (weeks 5-8)',
            type: 'list',
            data: [
              `Build MVP: voice in/out, top-20 questions answered in Hindi/Haryanvi first`,
              `Seed knowledge base: top 100 Q&As written, then expert-reviewed against real shop constraints (the Trust test, tools and materials actually available in Hisar shops)`,
              `Enroll Wave 1: 75 fabricators in person via the regional training partner, shop photos, profiles created for them, badge + sticker issued`,
              `Brief the first contributors: JSA trainers + ITI-trained students, badged as verified experts`,
              `Line up pilot advertisers/sponsors (for Phase 3's revenue test): target 3 brands + 2 category sponsors + 5 contractors`
            ]
          },
          {
            heading: 'Phase 2 - Live pilot, Wave 1 (weeks 9-16)',
            type: 'table',
            headers: ['Assumption', 'Operationalized test', 'Metric & bar'],
            data: [
              [`Engagement shape is right`, `A/B across Wave 1: bot-voice vs. trainer-named-voice answers`, `Repeat-ask rate per arm; winner becomes default`],
              [`Fabricators act on peer answers`, `Tag answer source (AI/trainer/peer); follow up on 20 answered questions/month: "did you do it?"`, `>=50% self-reported follow-through`],
              [`Contribution for reputation (was empty)`, `Invite all 75 to contribute (work photo or answer); track who does, then interview 5 contributors + 5 non-contributors on why`, `>=20% contribute >=1 item by week 16`],
              [`Leads route and fulfil`, `Route 10 to 20 real leads; track response time, fulfilment, customer satisfaction`, `>=60% fulfilled; response under 24h`],
              [`Reputation converts to rupees in about a month`, `Badged vs. unbadged: job volume over 60 days; ask customers "did the badge matter?"`, `Any measurable delta = signal`],
              [`Quote tool desirability`, `Prototype with 10 fabricators on live jobs`, `>=5 use it on a real job unprompted`],
              [`Vernacular AI holds up`, `Weekly: resolution rate, re-ask rate, human-escalation rate`, `Resolution >=70% by week 12`]
            ]
          },
          {
            heading: 'Phase 3 - Scale test, Wave 2 + revenue (weeks 17-24)',
            type: 'list',
            data: [
              `Wave 2: invite up to 500 from the 80K DB (Hisar region) via WhatsApp, digital-only onboarding. Compare activation vs. Wave 1's in-person rate: this answers "can this scale without feet on the street?"`,
              `Revenue mechanics go live (the empty "clients willing to pay" row, now testable): 3 brand placement slots offered at ₹5,000/month, metric is how many actually sign and renew month 2; 2 category sponsorships at ₹10,000/month, same; contractor verifications at ₹1,000, metric >=5 paid verifications by week 24`,
              `The bar isn't the ₹ amount, it's "did a real customer pay real money twice?" Renewal is the proof, not the first cheque`,
              `Continue Learn/Retain/Earn tracking: time-to-competence, 90-day retention (Wave 1 hits 90 days during this phase), time-to-first-job`
            ]
          }
        ]
      },
      {
        eyebrow: '⑧ Decision dashboard',
        title: 'What we watch',
        type: 'dashboard',
        data: [
          `Active fabricators`,
          `Week-4 retention %`,
          `Queries resolved %`,
          `Leads fulfilled`,
          `₹ collected from paying customers`
        ]
      },
      {
        type: 'notion',
        url: 'https://bmnpeach.notion.site/Stack-Overflow-for-Fabricators-37c7429233ab812f965bed9638f6418d'
      }
    ]
  },

  // ============================================================
  // IDEA 2 - Coursera × Duolingo for SS (R15)
  // ============================================================
  {
    id: 'R15',
    title: 'Coursera × Duolingo for SS',
    eyebrow: 'Now tier · Skills ladder',
    analogue: 'Coursera × Duolingo, for stainless steel skills',
    logo: 'Duolingo.png',
    icon: '🎯',
    tagline: 'A self-paced skills ladder: a career map shows the way, a skill tree shows the next step, and human verification turns finished branches into proof the market can trust.',
    revenue: '₹2,10,000',
    sections: [
      {
        eyebrow: '① How big is this problem?',
        title: 'The problem',
        type: 'problemTable',
        data: [
          {
            quote: `"My ustaad taught me everything he knew. Where he stopped, I stopped." Learning ends where the teacher's knowledge ends.`,
            jsa: `JSA training is an event, not a ladder. A batch ends and growth stops: 38,000 trained last year, no next rung for any of them.`,
            opp: `What if training became a ladder you climb for years, not a camp you attend once?`
          },
          {
            quote: `"I'm finishing ITI welding. I don't know what SS jobs exist, what they pay, or how anyone got them." (student voice)`,
            jsa: `82,700 ITI welders graduate every year with zero SS curriculum. They default to mild steel work, and JSL loses its future workforce before it ever meets them.`,
            opp: `What if every learner could see the careers, the pay, the people who made it, and the exact path from where they stand today?`
          },
          {
            quote: `"The course starts from zero. I have been welding for ten years."`,
            jsa: `One curriculum for every skill level: beginners drown, veterans walk out. Trainer hours go to teaching people what they already know.`,
            opp: `What if a placement test dropped each learner onto exactly the right rung, then let him climb branch by branch, at his own pace?`
          },
          {
            quote: `"Who checks my weld? My customer, when it leaks."`,
            jsa: `Hands-on skill cannot be assessed through a screen, so digital training stops at videos. Watching is not doing, and JSA cannot certify what it cannot verify.`,
            opp: `How might peer review and live verification by real fabricators and trainers make hands-on skill assessable at a distance?`
          },
          {
            quote: `"The training camp came to my town once. Then it left."`,
            jsa: `Physical batches cap JSA at roughly 38,000 a year on ₹7 Cr. The unreached pool is ~400,000 (480K universe minus 80K reached): a 10-year backlog at current pace, before counting the 82,700 new welders arriving each year.`,
            opp: `What if JSA's curriculum reached every smartphone, and trainers were reserved for the one thing only humans can do: verify skill?`
          }
        ]
      },
      {
        eyebrow: '② Who is this for, and what is it?',
        title: 'Who this is for & the product concept',
        type: 'paragraphs',
        data: [
          `Two learner pools, one ladder. We start with the harder one.`,
          `The road-side fabricator (primary). Self-taught, ustaad-trained, zero formal credentials. From the 80K database: smartphone in pocket, Tamil, Bengali, or Bhojpuri in ear, no institution behind him. He learns when work allows, so the ladder must bend to his week, not the other way around.`,
          `The ITI / polytechnic student (secondary). 82,700 ITI welders graduate each year with no SS curriculum among them. He is captive: a timetable, an exam, an institution that can adopt the ladder wholesale. He has not chosen stainless yet, which is exactly why the career map matters most for him. This is the rail institutions pay for.`,
          `Why start with the harder one: the fabricator has no timetable, no exam, and no principal making him log in. If the ladder survives a man whose learning competes with his earning, the captive ITI classroom is easy. The reverse is not true: a product built for classrooms dies in a workshop.`,
          `A self-paced skills ladder for stainless steel: a career map tells every learner where to start, a game-style skill tree tells him what to learn next, and human verification turns finished branches into proof the market can trust.`,
          `Platform note: own app, WhatsApp, or a home inside JSL's existing application is a build decision, not a concept decision. Phase 0 settles it.`
        ]
      },
      {
        eyebrow: '③ Why will they show up?',
        title: 'Why fabricators (and students) will show up',
        type: 'groups',
        intro: `The map shows him the money. The ladder shows him the way. The proof makes the market believe him. And the climb requires him to pull others up.`,
        data: [
          {
            heading: 'Why he joins (direct money)',
            items: [
              `The career map leads with rupees: what the next rung pays versus what he earns today, in his district, with named examples`,
              `Free where every competitor charges: the learner pays nothing; brands, employers, institutes, and government schemes carry the cost`,
              `Skills that unlock jobs he refuses today: every "I don't do SS kitchens" is revenue left on the table. A finished branch turns a no into a quote`
            ]
          },
          {
            heading: 'Why he stays (indirect money)',
            items: [
              `Verified rungs make him hireable: employers pay for certified talent, so each milestone raises his market price`,
              `The next rung always shows its worth: the tree displays what climbing it earns, so the ROI on his next free hour is never abstract`
            ]
          },
          {
            heading: `Why he contributes (the certificate requires it, the unlocks reward it)`,
            items: [
              `No certificate without giving back: every milestone includes reviewing peer work, the way Coursera bakes peer grading into the grade. Contribution is a rung, not a favor`,
              `Good help unlocks the ladder: reviews rated helpful by the learners who receive them earn priority slots for live verification and early access to advanced branches (the unlock menu gets tuned in pilot)`,
              `The helper track ends in a title: consistent, high-quality reviewers climb to named verifier, the JSA-backed role whose sign-off closes other people's milestones, with their face on the career map`,
              `The student rail runs on the same three rungs: placement instead of job leads, campus rank instead of locality status. The mechanics do not change, only the currency.`
            ]
          }
        ]
      },
      {
        eyebrow: '④ What does JSL get?',
        title: 'The prize for JSL',
        type: 'mixed',
        data: [
          {
            type: 'paragraphs',
            data: [
              `Every year JSA waits, 82,700 welders graduate into mild steel and learn to build without stainless. That is JSL's future market walking past the door, 227 welders a day.`
            ]
          },
          {
            type: 'table',
            headers: ['Revenue stream', 'Conservative pilot assumption', '6-month pilot'],
            totalRowIndex: 5,
            data: [
              [`Ad revenue: equipment, consumables, and safety brands buy fixed slots on lesson screens (never inside the teaching content)`, `3 brands x ₹5,000/month x 4 months`, `₹60,000`],
              [`Sponsorships: "Finishing, presented by [Brand]", one exclusive sponsor per branch plus one on the career map`, `3 sponsors x ₹10,000/month x 4 months`, `₹1,20,000`],
              [`Employer success fees: pay only when they hire a certified climber`, `5 employers x 1 hire/month x ₹1,000 x 2 months`, `₹10,000`],
              [`Private institute licensing: govt polytechnics stay free under the HSBTE MoU, private institutes pay`, `2 institutes x ₹10,000 per term`, `₹20,000`],
              [`Government skilling scheme: real money, wrong year`, `Booked at ₹0: pathway filed, camp model costed, first realistic cash FY 2027-28`, `₹0`],
              [`Total`, '', `₹2,10,000`]
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `Three flags on this table: slot and sponsorship fees are assumptions until real brands sign (six brand deals by month 3 is the sales lift, sourced through JSL's vendor and dealer relationships; if only half close, the pilot total reads ₹1,20,000), private institutes are the only licensing customers because Haryana's govt polytechnics already get the JSA module free under the HSBTE MoU (scope clause to be confirmed internally), and the government scheme row stays at ₹0 because its next phase is unapproved and JSA is not yet on the approved agency list.`,
              `Every active climber buys stainless. If dealer attribution in Hisar shows even 0.25 tonnes a year of extra purchase per active fabricator, then 8,000 active fabricators are worth 8,000 x 0.25t x ₹1.6L = ₹32 Cr a year of incremental steel against a ₹7 Cr Academy budget. The table keeps the pilot honest; this number funds the scale-up.`
            ]
          },
          {
            heading: 'Additional benefits',
            type: 'feat',
            data: [
              `The skill tree is a live skills census: JSL sees who can do what, where, at what level, across the whole tree`,
              `The curriculum becomes the standard: when ITIs teach SS from JSA's ladder, JSL writes the syllabus its future market learns from`,
              `Certified talent de-risks JSL projects: clients staff from a verified pool instead of "yes, I can do it"`,
              `The career map is a hiring funnel: the best climbers surface for JSL, its clients, and its dealers before the open market sees them`,
              `The SROI machinery extends: the measured ₹4 per ₹1 applies to in-person batches; digital reach lets the same engine touch learners those batches will never meet (to be re-measured digitally, not assumed)`
            ]
          }
        ]
      },
      {
        eyebrow: '⑤ What does this look like in practice?',
        title: `From a fabricator's perspective`,
        type: 'mixed',
        data: [
          {
            type: 'steps',
            data: [
              { title: 'Discover', body: `A JSA regional training partner walks into his Hisar shop and enrolls him in person. No app store search, no signup form. The partner runs the career map test with him, voice-led, in his language.` },
              { title: 'First use', body: `The map shows him what a certified SS railing specialist in his district earns against what he earns today, the face of a man who made that climb, and his own starting rung. Not chapter one: his rung.` },
              { title: 'Return', body: `A slow Tuesday. He climbs two lessons. The tree remembers where he stopped and shows what the next rung is worth before he spends a minute on it.` },
              { title: 'Contribute', body: `His milestone asks him to review two juniors' weld photos. One junior rates his note helpful. He unlocks a priority slot for live verification.` },
              { title: 'Level up', body: `A JSA trainer verifies his milestone weld over live video. The branch closes, his skill record updates, and an employer searching certified welders in Hisar finds him.` }
            ]
          },
          {
            heading: 'Designed for how fabricators actually learn',
            type: 'list',
            data: [
              `Voice in, voice out. The placement test, the lessons, the reviews: all speakable, nothing that demands reading fluency`,
              `A face on every rung. Lessons carry JSA trainer faces; the career map carries local heroes. Nobody aspires to a syllabus`,
              `Private by default. His placement result is his alone. A ten-year veteran placed on a low rung must never be shamed in public, or he leaves and tells others`,
              `Introduced by humans. First use happens in the shop with the training partner, not through a notification`
            ]
          }
        ]
      },
      {
        eyebrow: '⑥ Go-to-market',
        title: `From JSA's perspective: the 90-day go-to-market`,
        type: 'steps',
        intro: `The placement test is the marketing. Ten minutes, voice-led, and a man learns what his next skill pays. Nothing JSA has ever handed a fabricator sells harder than that sentence.`,
        data: [
          {
            title: 'Build four launch maps, not a career library (weeks 1 to 3)',
            body: `Each map is a named, filmed, local face, found through the trainers who know their alumni by name. Earnings rungs come from Phase 0 ground interviews ("what did you charge for your last three jobs"), never desk research. Railing and gate specialist: the core roadside trade in every Hisar market, the volume map. Commercial kitchen and food-grade fabricator: the pay-jump map, from dhaba counters to dairy, hotel, and client-side work. Karigar to malik: the veteran's map, hire a helper, quote bigger jobs, run the books, the business branch's front door. ITI welder to certified SS welder, employed: the student map, it ends in a placement story, because placement is what an ITI principal buys.`
          },
          {
            title: 'Digitize two branches that serve those maps (weeks 1 to 4, parallel)',
            body: `Branch one: SS welding for railing and gate work. Branch two: finishing and polishing, the skill customers can see. Both picked here by reasoning; the final call comes from TNA frequency data. Lessons recorded by JSA trainers in their own voices: a face on every rung, no studio narration. Languages: Hindi voice, Haryanvi ear, nothing else at launch. Hisar speaks Hindi and Haryanvi. Tamil, Bengali, and Bhojpuri wait for their own clusters. One language done well proves the voice pipeline; four done badly proves nothing.`
          },
          {
            title: 'Fabricator attention runs through two doors he already walks through (weeks 4 to 8)',
            body: `Wave 0 first: 10 to 15 JSA alumni from past Hisar batches, recruited by the trainers who trained them. They stress-test the tree and become the first case-study faces. The training partner's shop visit: the partner runs the placement test on the spot and hands over a printed rung card, your rung, your map, what the next rung pays. Wave 1 target: 75 fabricators enrolled in person. The steel dealer's counter: every fabricator buys material somewhere. Career-map posters and the partner's visit schedule sit at JSL dealer counters in Hisar; the dealer's word is the referral (dealer cooperation to be confirmed with BD, not assumed).`
          },
          {
            title: 'Student attention rides rails JSA already owns (weeks 4 to 8)',
            body: `One Haryana govt polytechnic, where the HSBTE MoU already makes the JSA module mandatory: the career map test becomes period one of that module. A whole cohort enrolls in an hour. One or two Hisar ITIs: pitch the principal a career day, psychometric test plus filmed alumnus plus the placement map. ITIs are placement-weak (NITI flags 42% seat utilization nationally), so placement stories are the currency. Offer: free module for the pilot; his institute becomes the paid-licensing test later.`
          },
          {
            title: 'Build verification capacity like supply, not support (weeks 4 to 12)',
            body: `Fixed verification windows: scheduled live-video slots with trainers, plus a weekly in-person verification day at the partner center. First verifier bench: JSA trainers and JSA's ITI-trained students, badged. Measure verifications per trainer per week from day one, because that number, not content, sets the cost of scale.`
          },
          {
            title: 'The first certificates ship with a ceremony (weeks 8 to 12)',
            body: `Physical certificate, handed out at the partner center, families invited, photos taken. In a cluster, the cheapest acquisition channel is the story a certified man tells in his own market. The ceremony manufactures that story on a schedule.`
          }
        ]
      },
      {
        eyebrow: '⑦ Research and testing plan',
        title: 'How we test it',
        type: 'mixed',
        data: [
          {
            type: 'glance',
            data: [
              { label: 'Where', val: 'Hisar cluster, plus one Haryana govt polytechnic (HSBTE rail) and 1 to 2 Hisar ITIs' },
              { label: 'Who', val: 'Wave 0: 15 JSA alumni -> Wave 1: 75 fabricators enrolled in person, plus one polytechnic cohort of ~30 -> Wave 2: 500 invited digitally from the 80K DB' },
              { label: 'How long', val: '24 weeks: 4 ground research -> 4 build and seed -> 8 live pilot -> 8 scale and revenue' },
              { label: 'Success bar', val: '>=50% of Wave 1 fabricators active in week 4; >=100 verified certifications by week 24' },
              { label: 'Revenue test', val: '3 ad slots and 3 sponsorships invoiced, 5 paid hires, 1 private institute signed, and the government pathway filed by month 6' }
            ]
          },
          {
            heading: 'Phase 0 - Ground research (weeks 1-4, pre-build)',
            type: 'table',
            headers: ['#', 'Question answered', 'Method', 'Output'],
            data: [
              ['1', `Do fabricators want to climb at all?`, `Show a paper career map and rung card to 25 to 30 Hisar fabricators across the four map profiles`, `Demand signal: % who ask "how do I start" unprompted`],
              ['2', `What does each rung actually pay?`, `Last-3-jobs pricing from the same 25 to 30, plus wage data from 5 to 8 employers`, `Earnings rungs for all four maps, >=5 data points per rung`],
              ['3', `Can a voice test place a learner?`, `Prototype placement test on 20 fabricators; compare against a trainer's hands-on assessment of the same men`, `Placement accuracy %: go/no-go on the front door`],
              ['4', `Can a trainer judge a weld over video?`, `20 paired verifications: live video versus in-person check of the same work`, `Agreement %: go/no-go on remote verification`],
              ['5', `Will anyone pay?`, `3 to 5 private institute interviews, 5 to 8 employer interviews, 6 to 8 brand conversations (equipment, consumables, safety), and scheme paperwork mapped with rates in writing`, `Written interest letters plus a costed government pathway`]
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `Gate A (end of week 4): >=40% unprompted "how do I start" on question 1, >=70% within-one-rung agreement on question 3, >=80% agreement on question 4. Fail the first and the concept dies cheap. Fail the third or fourth and the design changes (in-person milestones only), which changes the cost base before a rupee is spent on build.`
            ]
          },
          {
            heading: 'Phase 1 - Build and seed (weeks 5-8)',
            type: 'list',
            data: [
              `Build MVP: career map, placement test, two branches in Hindi/Haryanvi, evidence submission, peer review flow`,
              `Film the four map faces; trainers record lessons in their own voices`,
              `Onboard Wave 0: 15 alumni; fix every friction they hit`,
              `Sign one polytechnic and one ITI; line up 5 employers for the Phase 3 revenue test`
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `Gate B (end of week 8): >=10 of 15 Wave 0 alumni reach their first milestone with usable evidence, without hand-holding. If alumni who already trust JSA can't climb, strangers won't.`
            ]
          },
          {
            heading: 'Phase 2 - Live pilot, Wave 1 (weeks 9-16)',
            type: 'paragraphs',
            data: [
              `Wave 1 goes live: 75 fabricators plus the polytechnic cohort. The assumptions table below is what this phase exists to test.`,
              `Gate C (end of week 16): retention and contribution bars hold (assumptions table, Behavior and Proof rows). They size Wave 2; missing both kills the scale test.`
            ]
          },
          {
            heading: 'Phase 3 - Scale and revenue (weeks 17-24)',
            type: 'list',
            data: [
              `Wave 2: 500 invited digitally from the 80K DB, Hisar region. Activation versus Wave 1's in-person rate answers "can this scale without feet on the street?"`,
              `Revenue goes live: ad slots and sponsorships invoiced, success-fee hires begin, private institute renewal offered, government application filed`,
              `The bar is renewal, not the first cheque: did a real customer pay real money twice?`
            ]
          },
          {
            heading: 'Assumptions table',
            type: 'table',
            headers: ['Theme', 'Assumption', 'Test'],
            data: [
              [`Desirability`, `The career map makes fabricators want to start`, `Phase 0 paper test: >=40% ask "how do I start" unprompted`],
              [`Desirability`, `A voice-led test places learners correctly`, `>=70% of 20 placements within one rung of trainer judgment`],
              [`Behavior`, `Self-paced survives without a batch pushing`, `>=50% of Wave 1 active in week 4, >=35% in week 8`],
              [`Behavior`, `Mastery placement keeps veterans`, `<=20% drop-off in first 3 lessons among 10+ year fabricators`],
              [`Proof`, `Learners submit usable evidence`, `>=60% of milestone attempts include verifiable photo/video`],
              [`Proof`, `Mandatory peer review produces real help, not checkboxes`, `>=70% of reviews rated helpful by recipients; >=75% trainer spot-check agreement`],
              [`Proof`, `Remote verification holds`, `>=80% video-versus-in-person agreement; verification queue under 7 days through week 16`],
              [`Outcome`, `A closed branch changes earnings`, `Follow 10 branch completers for 60 days; any measurable delta in job types or rates is signal`],
              [`Student rail`, `The module survives the timetable`, `>=70% of the polytechnic cohort completes it within the term; principal asks to continue`],
              [`Money`, `Private institutes pay where the free MoU doesn't reach`, `>=1 of 2 signs at ₹10,000/term by week 24`],
              [`Money`, `Employers pay per certified hire`, `>=5 paid hires at ₹1,000 each by week 24`],
              [`Money`, `Government scheme money can attach later`, `Approved-agency application filed and camp model costed by week 24; ₹0 booked in the pilot`],
              [`Money`, `Brands pay for slots and sponsorships`, `3 advertisers and 3 sponsors invoiced by month 3; >=1 of each renews by month 6`],
              [`The prize`, `Active climbers buy more stainless`, `Dealer-attribution codes live in Hisar; purchase delta of active climbers versus matched non-users measured by week 24`]
            ]
          }
        ]
      },
      {
        eyebrow: '⑧ Decision dashboard',
        title: 'What we watch',
        type: 'dashboard',
        data: [
          `Active climbers: learners with >=1 lesson in the last 30 days`,
          `Week-4 retention %: the self-paced bet, alive or dead`,
          `Rungs verified this month: the outcome unit. Certificates, hires, and revenue are all downstream of this number`,
          `Verification queue in days: the cost-of-scale number. If it grows, trainer supply is the binding constraint, not demand`,
          `₹ collected from paying customers: brands plus employers plus institutes, with renewals counted separately from first cheques`
        ]
      },
      {
        type: 'notion',
        url: 'https://bmnpeach.notion.site/Coursera-Duolingo-for-SS-37c7429233ab81da91e5c5c046815a9b'
      }
    ]
  },

  // ============================================================
  // IDEA 3 - Masterclass × Guru-Shishya for Masters (R16)
  // ============================================================
  {
    id: 'R16',
    title: 'Masterclass × Guru-Shishya for Masters',
    eyebrow: 'Now tier · Master craftsmen',
    analogue: 'Masterclass × Guru-Shishya, for retiring SS experts',
    logo: 'Masterclass.jpg',
    icon: '🎓',
    tagline: 'Retired experts the industry already respects, recorded for posterity, teaching becomes the most rewarding thing they have ever done.',
    revenue: '₹1,70,000',
    sections: [
      {
        eyebrow: '① How big is this problem?',
        title: 'The problem',
        type: 'problemTable',
        data: [
          {
            quote: `"What do I get for teaching someone my secrets? There's no money in it, and my edge is all I have." (the master)`,
            jsa: `The best people in the ecosystem refuse to teach. JSA recruits trainers from the second tier, so quality is capped at the top.`,
            opp: `What if teaching became the highest-status, best-paid thing a retired expert can do, with earning streams JSA arranges?`
          },
          {
            quote: `"I solved that on a project twenty years ago. Honestly, I don't remember half of it myself." (the master)`,
            jsa: `Expert knowledge is fading right now, unrecorded. Every year of delay shrinks what JSA can ever capture.`,
            opp: `What if teaching doubled as retrieval: a guided program that helps the master reconstruct what he or she knows, while there is still time?`
          },
          {
            quote: `"I'm sixty-two. Don't ask me to learn an app so I can teach welding." (the master)`,
            jsa: `JSA's digital ambitions depend on teachers who won't go digital. The best knowledge never reaches the new channels.`,
            opp: `What if the master never touched the digital part: demonstrate and talk, and the platform produces everything around them?`
          },
          {
            quote: `"The person who earns ten times my rate will never take me on. I don't know anyone who knows them." (the learner)`,
            jsa: `JSA has no star teachers. The aspiration pull that sells Masterclass and powers YouTube currently sends learners elsewhere.`,
            opp: `What if renown itself became the product: learn directly from the highest earners, on a visible path to becoming one?`
          },
          {
            quote: `"My ustaad taught me to copy, exactly. Nobody taught me to think for myself." (the student)`,
            jsa: `Rote-trained fabricators fail on any job that deviates from the pattern. The failures get blamed on stainless, not the welder.`,
            opp: `How might masters teach judgment, not just technique: the why behind the weld, not only the hand?`
          }
        ]
      },
      {
        eyebrow: '② Who is this for, and what is it?',
        title: 'Who this is for & the product concept',
        type: 'paragraphs',
        data: [
          `We're building for two people at once, and the order matters: masters first, learners second.`,
          `The retiring master is who we win first. A plant expert with two kinds of credibility: formal credentials, and the kind of client work that makes younger fabricators want to listen. Masters also have every reason to turn us down: teaching has never paid them, half of what they once knew has faded, and nobody wants to learn an app at sixty-two. If we can't convert them, there is no product.`,
          `The young learner is who it's for. A young fabricator, or a mild-steel welder trying to get into stainless. What learners want is not a certificate. They want to learn from someone who actually earns well in this trade, and to get there themselves.`,
          `Why masters first: the learners are already out there, watching YouTube. What doesn't exist is anyone worth following inside JSA's world. If we get even five genuinely respected masters teaching, learners will come to them. The reverse doesn't work.`,
          `We take retired experts the industry already respects, record their life's work for them, and make teaching the most rewarding thing they've ever done, so their students grow into JSA's next generation of trainers.`
        ]
      },
      {
        eyebrow: '③ Why will they show up?',
        title: 'Why masters and learners will show up',
        type: 'groups',
        intro: `Status gets masters in the door. Money keeps them teaching. Learners just want to become them.`,
        data: [
          {
            heading: `The master's ladder: why masters join (status, with money attached - their objections are the whole problem table, so we answer them first)`,
            items: [
              `It starts as a paid position, not a favor. A teaching fellowship with a stipend. Small, but it's the first time anyone has paid them to teach`,
              `We build them a stage. The masterclass, the profile, the client history, all public. Most of these experts spent forty years being respected inside one plant. This makes that respect visible outside it`
            ]
          },
          {
            heading: 'Why masters stay (income that compounds)',
            items: [
              `The class keeps earning after the recording ends. Every NSDC batch and every accredited centre that teaches from a master's class pays him or her a share. Students never pay; institutions do.`,
              `The recipe book is theirs to sell. Signature fixes and settings, packaged under their own name. A second stream they control`,
              `Being findable brings work. Consulting, audits, second opinions. We'd be lying if we promised this, so the pilot tests it with the first five masters instead`
            ]
          },
          {
            heading: 'Why masters give (legacy)',
            items: [
              `Their name travels with their students. "Trained under [master]" follows every fabricator they certify. Skill in this trade has never carried a surname before`,
              `They get their own career back. The guided interview turns forty years of half-remembered projects into something recorded and organized. The alternative is that it disappears`
            ]
          },
          {
            heading: `The learner's ladder (shorter, because their motivation needs less engineering)`,
            items: [
              `They join to earn more. The fastest way to raise your rate is to learn from someone who commands a high one. A known master's name on your certificate should win jobs an anonymous one can't. That "should" is a pilot hypothesis, not a fact`,
              `They stay because the learning compounds. Judgment rather than copying means they can take jobs that deviate from the pattern. And for a mild-steel welder, simply getting into stainless is a pay rise`,
              `They teach to keep rising. Level 1 teacher is the first taste of status, and at the top of the climb sits a recipe book and a masterclass with their own name on it`
            ]
          }
        ]
      },
      {
        eyebrow: '④ What does JSL get?',
        title: 'The prize for JSL',
        type: 'mixed',
        data: [
          {
            type: 'paragraphs',
            data: [
              `The YouTube model rebuilt: on YouTube, viewers never pay; advertisers do, and creators get a share. Here, students never pay; institutions do, and masters get a share. Three institutions hold money in this system: training centres that need content and credibility, NSDC which needs instructors, and JSA which sits in the middle and keeps the larger share of every stream.`
            ]
          },
          {
            type: 'table',
            headers: ['Revenue stream', 'Conservative pilot assumption', '6-month pilot'],
            totalRowIndex: 4,
            data: [
              [`Masterclass licensing: multiple centres each pay a monthly licence to teach one particular master's recorded class in their classrooms`, `3 centres x ₹5,000/month, all licensing the same master's class in the pilot`, `₹90,000`],
              [`Centre accreditation ("JSA Master-certified" status, renewable)`, `3 centres x ₹10,000 per term (₹5,000/month equivalent)`, `₹30,000`],
              [`NSDC instructor pipeline (per newly certified teacher)`, `25 certified teachers x ₹2,000`, `₹50,000`],
              [`Recipe books + brand sponsorship of master clips`, `Counted at ₹0. Pilot tests willingness to pay only`, `₹0`],
              [`Total`, '', `₹1,70,000`]
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `What the master sees, in the same numbers: the master licensed by all 3 centres earns 30% of ₹15,000, so ₹4,500 a month on top of the stipend, before recipe books. At 20 centres licensing the same class, the same arithmetic pays ₹30,000 a month, which is a real second career.`,
              `Flags: all three prices are Phase 0 assumptions. The 30% master share is a policy decision Bhavna has to own: it commits JSA to sharing revenue with outsiders for the first time. The NSDC per-instructor rate must be confirmed in writing before it is quoted anywhere. Brand sponsorship of a named person is a precedent decision, so it stays at ₹0 until tested.`,
              `If 5 masters and 3 centres in one district make ₹1.7L in six months, what does a bench of 100 masters, licensed into 500 centres and feeding NSDC's national instructor shortage, make?`
            ]
          },
          {
            heading: 'Additional benefits',
            type: 'feat',
            data: [
              `Each master multiplies trainer capacity five times: 5 masters produce 25 certified teachers in 6 months. Trainer supply is the cap on the entire 38,000-a-year machine, and this is the concept that raises the cap`,
              `The library outlives the teaching: every masterclass and recipe book stays in JSL's ecosystem after the master stops, which answers knowledge walking out the door one retirement at a time`,
              `Stars feed everything else: the masters become the renowned faces every other JSA concept currently lacks, from course content to career-map case studies`,
              `Her corps grows, nobody is threatened: every certified teacher is new supply for the existing Academy model, not a rival to it`,
              `Judgment-trained fabricators protect the brand: fewer pattern-following failures in the field means fewer failures blamed on stainless`
            ]
          }
        ]
      },
      {
        eyebrow: '⑤ What does this look like in practice?',
        title: `From the master's side`,
        type: 'mixed',
        data: [
          {
            type: 'steps',
            data: [
              { title: 'Discover', body: `It starts with a phone call from someone they respect, not an app. A JSA leader or an old client calls with a paid fellowship, a title, and a recording crew. The first conversation is about their career, not our platform.` },
              { title: 'First use', body: `The first session is just talking. A guided interview begins walking back through forty years, project by project, while the crew records. Nothing to install, nothing to learn.` },
              { title: 'Return', body: `Recognition arrives in days, and the first outside payment installment inside a month. Clips from the first recording session go out through JSA's network of 80,000 fabricators, so within a week the master hears their own words quoted back at them. The first money follows fast, and none of it is JSL's: a paid guest session inside an already-funded batch, a brand sponsoring the first clips, or a second opinion JSA brokered. Underneath the quick wins, the deeper pull stays: every session retrieves another project they had half forgotten, and the masterclass growing under their name is proof the career is not lost.` },
              { title: 'Contribute', body: `They choose five students and teach them on real problems. JSA shortlists, the master picks, and the teaching runs on cases from the master's own projects. This is also where the recipe book gets written.` },
              { title: 'Level up', body: `The name starts working on its own. Centres license the class and a share arrives every month. Students certify carrying the master's name. Somewhere around month four, a stranger calls asking for a consultation.` }
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `The learner's journey runs on the same beats, compressed: they discover that a name they have heard of is actually taking students. Their first use is applying and being chosen. What brings them back is learning on real problems instead of rote lessons. They contribute by teaching juniors once the Level 1 track opens. And they level up when a certificate carrying a known name starts winning jobs their old one never did.`
            ]
          },
          {
            heading: `Designed around one fact: our teacher is sixty-two and has never made content`,
            type: 'list',
            data: [
              `Everything else follows from that. Because a sixty-two-year-old expert does not answer signup links, the first touch is always a person they respect.`,
              `Because they will not film, edit, or operate an app, their only job is to demonstrate and talk, and production happens around them.`,
              `Because forty years of knowledge is stored as projects rather than syllabi, we jog memory project by project instead of asking anyone to write a curriculum.`,
              `And because their standing is the entire asset, the bar stays public while rejections stay private: who got in is celebrated, who was declined is never named.`
            ]
          }
        ]
      },
      {
        eyebrow: '⑥ Go-to-market',
        title: `From JSA's perspective: the cold start`,
        type: 'mixed',
        data: [
          {
            type: 'list',
            data: [
              `The first five masters come from JSL's own orbit: recently retired plant experts and client-side veterans BD already knows by name (whether this pool exists within reach of Hisar is a Phase 0 question, not an assumption)`,
              `Two masterclasses are recorded before any learner sees anything. The shelf cannot open empty`,
              `First students are hand-picked from JSA's already-trained pool, so the first certifications are fast and credible`,
              `One centre is accredited at launch to receive the first licensed class and give the revenue model its first data point`,
              `The NSDC conversation starts in week one, not month four, because the instructor pipeline is the biggest stream at scale`
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `The kill condition, carried from your own pilot sketch: fewer than 3 of the 5 masters completing the program kills the concept, because it means the motivation problem in row 1 is real and unsolved.`
            ]
          }
        ]
      },
      {
        eyebrow: '⑦ Research and testing plan',
        title: 'How we test it',
        type: 'mixed',
        data: [
          {
            type: 'glance',
            data: [
              { label: 'Where', val: `Hisar, with one honest caveat: the masters' locations may pull the pilot, since five respected retirees matter more than cluster purity. Phase 0 settles it` },
              { label: 'Who', val: `5 masters on paid fellowship, 25 students (5 chosen by each master), 3 licensing centres, 1 NSDC negotiation` },
              { label: `Why students are in the pilot at all`, val: `The 25 students are the sanity check. Every question they ask gets logged, and the share of questions the master's content already answers tells us whether the material works before any centre licenses it` },
              { label: 'How long', val: `24 weeks: 4 weeks recruitment and ground research, 8 weeks recording and seeding, 12 weeks teaching, certifying, and collecting` },
              { label: 'Success bar', val: `Masters earn real money within the 6 months, and they come back to record a second course without being chased. Completion floors sit underneath: at least 3 of 5 masters finish, at least 20 of 25 students certify` },
              { label: 'Revenue test', val: `3 paid centre licences, 3 accreditations, and the NSDC per-instructor rate confirmed in writing` }
            ]
          },
          {
            heading: 'Phase 0 - Ground research (weeks 1-4)',
            type: 'table',
            headers: ['#', 'Question answered', 'Method', 'Output and bar'],
            data: [
              ['1', `Do the masters exist, and will they say yes?`, `List 15 candidates from JSL plant retirees and client-side veterans through BD; pitch the fellowship one-on-one`, `5 signed from 15 pitched. Below 5, the supply assumption fails before anything is built`],
              ['2', `Does status-first actually move them?`, `Sequence every pitch the same way: title and stage first, money second; log what each candidate responds to`, `Objection log across 15 conversations, tests problem row 1`],
              ['3', `Can guided retrieval produce teachable material?`, `Run 2 interview sessions each with 2 signed masters; review output with a curriculum designer`, `>=70% of retrieved cases rated usable for teaching, tests row 2`],
              ['4', `Will centres pay to license a named class?`, `Pitch 8 centres with a mock licence at ₹5,000/month`, `3 LOIs at the quoted price`],
              ['5', `What does NSDC pay per certified instructor?`, `Map the norms with an NSDC contact, get the rate in writing`, `Written rate, or the stream is cut from the model`],
              ['6', `Does a master's name actually pull learners?`, `Release 2 clips of one master through the 80K network and open 5 student seats`, `>=50 applications for 5 seats. The cheapest possible test of row 4, the renown assumption`]
            ]
          },
          {
            heading: 'Phase 1 - Record and seed (weeks 5-12)',
            type: 'list',
            data: [
              `Record 2 masterclasses end to end, with the other 3 in progress`,
              `Clips circulate through the 80K network continuously; if a brand signs to sponsor them, the sponsorship runs at ₹0 in the model and pure upside in reality`,
              `Each master picks 5 students from JSA's already-trained pool. Their job is double: learn, and surface every question the content fails to answer`,
              `First centre accredited; first guest sessions inside funded batches booked, so the first non-JSL payment installments reach masters before teaching even starts`,
              `Recipe book format tested with 2 masters`
            ]
          },
          {
            heading: 'Phase 2 - Teach, certify, collect (weeks 13-24)',
            type: 'table',
            headers: ['Theme', 'Assumption', 'Test and bar'],
            data: [
              [`Master retention`, `Status plus early money keeps masters engaged to the end`, `>=3 of 5 complete: the kill condition`],
              [`Master earnings (success bar 1)`, `The YouTube model produces real money for masters`, `Every active master receives >=1 payment installment from a non-JSL source by week 16, and every active master has earned revenue by week 24`],
              [`Voluntary return (success bar 2)`, `Teaching was worth it, in the master's own judgment`, `>=3 of 5 masters commit to recording a second course by week 24, unprompted`],
              [`Content sanity`, `The master's content answers the questions real students actually have`, `Log every student question; >=70% answered by the existing course material by week 20, gaps feed course revisions`],
              [`Teaching quality`, `Masters teach judgment, not just stories`, `Students assessed on problems not covered in lessons: >=70% pass`],
              [`Certification`, `The 5-per-master pace holds`, `>=20 of 25 certified by week 24`],
              [`Learner pull`, `Renown drives demand`, `Application ratio stays >=10 per seat when the second cohort opens`],
              [`Licensing`, `Centres value a named class enough to renew`, `3 licences live; >=2 renew or commit renewal in writing`]
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `Go/no-go gates: end of Phase 0 (5 masters signed, 3 centre LOIs, NSDC rate in writing, else reshape before recording), week 16 (master retention plus first non-JSL payment installments), week 24 (master earnings, voluntary returns, certifications, renewals).`
            ]
          }
        ]
      },
      {
        eyebrow: '⑧ Decision dashboard',
        title: 'What we watch',
        type: 'dashboard',
        data: [
          `Masters active, out of 5, and how many have committed to a second course`,
          `Students certified, cumulative, against 25`,
          `Centre licences active, renewals shown separately from first signings`,
          `₹ collected from institutions (licences + accreditation + NSDC)`,
          `₹ reaching masters, installment count and total, because the success bar is masters earning`
        ]
      },
      {
        type: 'notion',
        url: 'https://bmnpeach.notion.site/Masterclass-Guru-Shishya-for-Masters-37c7429233ab817d8705dc6d7a80a806'
      }
    ]
  },

  // ============================================================
  // IDEA 4 - Quality assurance ritual building (R11 / Pre-weld ritual videos)
  // ============================================================
  {
    id: 'R11',
    title: 'Quality assurance ritual building',
    eyebrow: 'Now tier · Shop-floor ritual',
    analogue: 'A recipe + checklist ritual for every SS job, built from the client’s own way of working',
    logo: 'Pre Weld Ritual.png',
    icon: '✅',
    tagline: 'Every SS job gets a recipe. The welder clears each step with a photo and a voice note; mistakes go into a private log only he can see.',
    revenue: '₹1,70,000',
    sections: [
      {
        eyebrow: '① How big is this problem?',
        title: 'The problem',
        type: 'problemTable',
        data: [
          {
            quote: `"I'm new here. Stainless is a different game, this company has its own way, and I still forget a step here and there."`,
            jsa: `New hires learn stainless by ruining it. Onboarding is trial and error on the client's material.`,
            opp: `What if every organisation's way of working became a recipe a new hire could run from day one?`
          },
          {
            quote: `"The SOP is in a binder in the office, in English. My hands are full."`,
            jsa: `The standard lives in a binder. The failure happens at the bench.`,
            opp: `What if the checklist arrived at the bench as video and voice, in his language, job by job?`
          },
          {
            quote: `"Whoever touched it last gets blamed. I don't want it to be me."`,
            jsa: `Every failure becomes an argument. No evidence, just blame, and supervisors refereeing instead of inspecting.`,
            opp: `What if every cleared step left photo proof: protection for the welder, traceability for the client?`
          },
          {
            quote: `"I finish, then I wait for someone to come and check before I can move."`,
            jsa: `Inspection walks, the line waits. Checking speed, not welding speed, sets throughput.`,
            opp: `What if a tick with evidence cleared the checkpoint and alerted the next station automatically?`
          },
          {
            quote: `"I'm scared to mention my mistakes. I do a quick fix and push it ahead before anyone notices."`,
            jsa: `Hidden errors repeat at every bench. No rework number exists, so the cost stays invisible and the training can't be aimed.`,
            opp: `How might privately logged mistakes become anonymous aggregate intelligence that improves every recipe and finally puts a number on rework?`
          }
        ]
      },
      {
        eyebrow: '② Who is this for, and what is it?',
        title: 'Who this is for & the product concept',
        type: 'paragraphs',
        data: [
          `The employed welder at a JSL client site (primary). He works in a fabrication setup serving JSL clients: railway work, kitchens, plant jobs. Trained once, picked up the rest by watching. Usually new to stainless, or new to how this site does things, or both. Has a smartphone, speaks a regional language, and mostly doesn't want to get blamed.`,
          `The line supervisor / QC in-charge (secondary). He runs quality by walking the floor, so every gate waits for him and every dispute lands on him. The dashboard is his side of the product, and he's the one who decides whether the mandate actually gets enforced.`,
          `We start with the welder because the whole thing fails quietly if he hates it. A welder who resents the tool will tick boxes without doing the steps, and the dashboard fills up with fiction. The supervisor is easy to win over; visibility sells itself. The real test is whether the welder runs the ritual in week two, when nobody is watching.`,
          `Every SS job gets a recipe built from the client's own way of working. The welder clears each step with a photo and a voice note, a cleared step moves the job to the next station, and his mistakes go into a private log only he can see.`,
          `One rule holds the data design together: jobs are public, people are private, aggregates teach. And the client signs one clause before launch: a mistake caught before the tick is learning, never punishable. Only defects that ship past a tick count as QC events.`
        ]
      },
      {
        eyebrow: '③ Why won’t this become a chore?',
        title: 'Why this won’t become a chore',
        type: 'groups',
        intro: `The mandate puts it in his hand. What keeps it from becoming a chore is that every tick gives him something back, the same day.`,
        data: [
          {
            heading: 'The chore test',
            items: [
              `A chore is work that costs your time and pays someone else. So the design bar is fixed: clearing a step costs seconds (photo, voice note, tick) and pays him before the shift ends, not at appraisal time.`,
              `Day one, it answers the questions he didn't want to ask out loud: how this site does things, step by step, in his language. No foreman, no looking small.`,
              `By week one it's protecting him. When something fails downstream, his cleared checkpoints speak for him, and "I don't want it to be me" finally has an answer. His tick releases the next station, so he isn't standing around waiting for an inspector. The supervisor stops hovering, which suits them both.`,
              `By month one it's coaching him. His error curve bends down where nobody else can see it, nudges arrive before he repeats a mistake instead of after, and the log quietly builds into something he can put on the table when the promotion conversation comes.`,
              `One hard rule keeps this honest: the day the ritual is slower than the walk-over it replaces, it dies. That's a design constraint and a pilot metric, seconds per tick.`
            ]
          }
        ]
      },
      {
        eyebrow: '④ What does JSL get?',
        title: 'The prize for JSL',
        type: 'mixed',
        data: [
          {
            type: 'paragraphs',
            data: [
              `When a client's weld fails, the client doesn't blame the welder. He blames stainless. Every unmeasured rework hour at a client site gets quietly billed to the material's reputation, and JSL is the material.`,
              `Site 1 live from month 2, site 2 from month 5.`
            ]
          },
          {
            type: 'table',
            headers: ['Revenue stream', 'Conservative pilot assumption', '6-month pilot'],
            totalRowIndex: 3,
            data: [
              [`Recipe setup: digitizing each site's way of working into one guidebook it owns`, `2 sites x ₹50,000 one-time`, `₹1,00,000`],
              [`QC dashboard subscription (Basic plan: see everything live)`, `1 paying site x ₹15,000/month x 3 paid months (first 2 free)`, `₹45,000`],
              [`Dashboard-triggered JSA workshop: the aggregate tells JSA which workshop to sell where`, `1 workshop x ₹25,000 (placeholder; JSA's rate card applies)`, `₹25,000`],
              [`Total`, '', `₹1,70,000`]
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `The subscription is a freemium ladder: two free months, then Basic (₹15,000/month per site: see everything live), then Advanced (+₹3,000 per line per month). Basic lets the supervisor see it. Advanced turns what he sees into things the client can deliver: one report pack per line per month, carrying dispatch documentation for the end customer, a management summary, and the line's error trends, summarised automatically. Advanced waits in the annexure until one BD question is answered at site selection: does this site's end customer ask for weld documentation?`,
              `If one fully ramped site is worth about ₹29,000 a month recurring (₹15,000 Basic + ₹6,000 in Advanced reports from 2 lines x ₹3,000 + ₹8,300 workshop equivalent) plus ₹50,000 setup, what do 50 client sites yield (50 x ₹29,000 x 12 ≈ ₹1.7 Cr a year) once the price tracks documented rework savings instead of software?`
            ]
          },
          {
            heading: 'Additional benefits',
            type: 'feat',
            data: [
              `The rework baseline itself. The first hard number on what bad welding costs at client sites. Every JSA business case after this one gets to use it`,
              `Lock-in. A client whose QC runs on JSL recipes is buying more than steel`,
              `A daily-use reason for Saathi. If the ritual lives inside JSL's own app, every checkpoint is a daily touchpoint between JSL and the client's floor`
            ]
          }
        ]
      },
      {
        eyebrow: '⑤ What does this look like in practice?',
        title: 'One job, start to finish',
        type: 'mixed',
        data: [
          {
            type: 'steps',
            intro: `A 40-meter platform handrail job lands in the morning, 304 grade. The recipe assembles from the railway guidebook: 12 steps, 4 checkpoints. The welder has done handrails for years, just not this client's spec.`,
            data: [
              { title: 'He runs it by voice', body: `At the one step he doesn't know, this client's fit-up tolerance, he watches a 90-second video once.` },
              { title: 'First checkpoint', body: `Photo of the cleaned joint, voice note "degreased, separate brush for SS", tick. The supervisor's board updates on its own and the next station knows the job is coming.` },
              { title: 'Mid-job', body: `He notices the wrong filler laid out, swaps it, logs it in two taps. That entry goes to his code and nowhere else.` },
              { title: 'Final checkpoint', body: `The job now carries its whole evidence trail. When a joint fails somewhere on site three weeks later, the argument is short. His checkpoints speak for him.` }
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `The supervisor's version of the same day: a board of jobs sitting at their checkpoints, open boxes where steps got skipped, evidence one tap away. On Friday he sees the aggregate: most-skipped step this week, interpass temperature check. The right recipe clip goes out to the line, no names attached.`
            ]
          }
        ]
      },
      {
        eyebrow: '⑥ Go-to-market',
        title: `From JSA's perspective: getting to a live site in 90 days`,
        type: 'steps',
        data: [
          {
            title: 'Pick the site with BD',
            body: `Let the clause do the filtering. SS-heavy fabrication, a supervisor who feels rework pain weekly, management willing to sign the no-punishment clause. A client who won't sign it isn't a pilot site. And one more question for the same call: does this site's end customer demand weld documentation? A yes moves the Advanced plan into the main revenue table.`
          },
          {
            title: 'Spend two weeks measuring before changing anything',
            body: `Disputes, redone jobs, hours lost waiting at inspection. No rework data exists anywhere today, so the baseline is a deliverable in its own right, and the prize section is unprovable without it.`
          },
          {
            title: `Build one guidebook from the site's own best welder`,
            body: `A JSA trainer and a camera on the floor for two to three weeks, filming this site's way of working done right, in the site's language. The faces in the videos are men from that floor, not a studio.`
          },
          {
            title: 'Run the ritual thin before building heavy',
            body: `One line, 5 to 8 welders, photos and voice notes through a lightweight prototype, ticks tracked by hand. Preference: run it inside JSL's own Saathi app rather than a third-party channel like WhatsApp, whose business policies limit what we can build. The platform call is a Phase 0 decision. If the ritual fails as a thin prototype, no dashboard would have saved it, and we learn that for almost nothing.`
          },
          {
            title: 'Then switch on the full product for one line',
            body: `And measure seconds per tick and evidence quality every week.`
          },
          {
            title: 'Earn the second line, then the second site',
            body: `Line 2 only after line 1 holds at week 8. Site 2 is the repeatability test and the first honest pricing conversation, quoted per line (₹8,000/line) to test how the price scales.`
          }
        ]
      },
      {
        eyebrow: '⑦ Research and testing plan',
        title: 'How we test it',
        type: 'mixed',
        data: [
          {
            type: 'glance',
            data: [
              { label: 'Where', val: '1 JSL client site picked with BD, railway-facing preferred. Site 2 joins from month 5' },
              { label: 'Who', val: 'Line 1: 5 to 8 welders and their supervisor; line 2 from month 4 if the checkpoint passes' },
              { label: 'How long', val: '6 months: month 1 baseline and filming -> months 2 to 3 thin prototype to full product -> months 4 to 6 scale and revenue' },
              { label: 'Success bar', val: '>=80% of line 1 jobs run through the ritual unprompted at week 8; first paid invoice in month 4' },
              { label: 'Kill switch', val: `The cheapest in the portfolio: if no client signs the no-punishment clause in month 1, the concept stops before a rupee of build is spent`, kill: true }
            ]
          },
          {
            heading: 'Month 1 - find the buyer, count the baseline',
            type: 'list',
            data: [
              `Pitch 3 to 5 BD-introduced clients. The no-punishment clause is the filter: a client who won't sign it isn't a pilot site. Bar: 1 signature from 5 meetings`,
              `Two weeks on the signed site's floor before changing anything: rework incidents, blame disputes, hours lost waiting at inspection, jobs per welder per day. No rework data exists anywhere today, so this fortnight is a deliverable in itself. Bar: every assumed driver in the revenue model replaced by a counted number`,
              `While filming the guidebook, build the error census: the ten most skipped or failed steps, ranked by what they cost`
            ]
          },
          {
            type: 'paragraphs',
            data: [
              `Checkpoint A (end of month 1): clause signed, baseline counted, guidebook filmed. Miss the signature and we stop, having spent only meetings.`
            ]
          },
          {
            heading: 'Months 2-3 - thin prototype, then the real product',
            type: 'paragraphs',
            data: [
              `One line runs the ritual through a lightweight prototype (target: inside Saathi; platform call settled here). Week-8 checkpoint at the end of month 3.`,
              `Checkpoint B (week 8): ritual compliance >=80% of jobs unprompted, median seconds per tick <=90, evidence spot-checks >=80% genuine. Pass, and line 2 joins. Fail on compliance and the concept has a desirability problem no dashboard fixes.`
            ]
          },
          {
            heading: 'Months 4-6 - scale it, charge for it',
            type: 'paragraphs',
            data: [
              `Line 2 joins, site 2 onboards in month 5, and the money mechanics go live: Basic invoice in month 4, Advanced if the site's customer demands documentation, one workshop sold off the aggregate, site 2 quoted per line. The bar stays renewal, not the first cheque.`
            ]
          },
          {
            heading: 'Assumptions table',
            type: 'table',
            headers: ['Theme', 'Assumption', 'Test'],
            data: [
              [`The buyer`, `A client will sign the no-punishment clause`, `3 to 5 pitches in month 1; >=1 signature, or stop`],
              [`The baseline`, `Rework and waiting can be counted in two weeks`, `Baseline fortnight: rework incidents, dispute hours, inspection waits, jobs/welder/day all counted, none assumed`],
              [`The ritual`, `Welders run it when nobody is watching`, `Weeks 7 to 8: >=80% of line 1 jobs fully checkpointed without prompting`],
              [`The chore test`, `The tick is faster than the walk-over it replaces`, `Median <=90 seconds per tick; checkpoint time per job below the measured inspection wait`],
              [`The evidence`, `Photos stay real, not theater`, `Weekly trainer spot-check of 10 random checkpoints; >=80% match through week 12`],
              [`The log`, `Welders privately log caught errors at all`, `>=4 of 6 welders make >=1 unprompted entry by week 8`],
              [`The format`, `Video teaches, voice runs (open design question)`, `A/B inside line 1: video-only vs video-then-voice; decided by re-watch rate and seconds per tick`],
              [`The contract`, `Nobody gets punished for a logged error`, `Anonymous welder check-ins monthly; one punishment incident counts as breach and goes to management`],
              [`The flow`, `Checkpoints actually replace walking`, `Supervisor walk-over hours and inspection waits, measured against baseline by week 12`],
              [`The money`, `Free converts to paid`, `Basic paid in month 4 and renewed in months 5 and 6; Advanced and one workshop sold by month 6 if their deciding questions came back yes`]
            ]
          }
        ]
      },
      {
        eyebrow: '⑧ Decision dashboard',
        title: 'What we watch',
        type: 'dashboard',
        data: [
          `Jobs through the ritual, as a share of the line's total jobs. Adoption, in one number`,
          `Median seconds per tick. The chore meter: if it climbs, the product is dying at the bench`,
          `Evidence spot-check pass %. The truth meter: catches pencil-whipping before it poisons the data`,
          `Rework versus baseline. The outcome number, and the one that prices everything after the pilot`,
          `₹ collected, by plan. Basic, Advanced, workshops, with renewals counted separately from first cheques`
        ]
      },
      {
        type: 'notion',
        url: 'https://bmnpeach.notion.site/Quality-assurance-ritual-building-37c7429233ab8125ad39e666571378b4'
      }
    ]
  }
];
