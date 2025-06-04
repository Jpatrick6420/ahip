const questions = [
  {
    question:
      "Mrs. Park is an elderly retiree. Mrs Park has a low fixed income. What would you tell mrs park that might be of assistance?",
    answer:
      "She shoud contaact the state medicaid office to see if she qualifies for one of several programs that can help with medicare costs for which she is responsible.",
  },
  {
    question:
      "Mrs patterson is concerned about the deductable and co-payments associated with original medicare. What should you tell her about Medigap options?",
    answer:
      "Medigap plans don't cover original Medicare benefits but they coordinate with original medicare coverage.",
  },
  {
    question:
      "Mrs Turner is comparing her employers retiree insurance to Original Medicare and would like to know which of the following services Original Medicare will cover if the appropriate criteria is met?",
    answer: "Original medicare covers amulance services",
  },
  {
    question:
      "Ms. Brooks has aggressive cancer and would like to know if medicare will cover hospital services in case she needs them. What should you tell her?",
    answer:
      "medicare covers hospice services, and they will be available for her",
  },
  {
    question:
      "Mr. Alonso receives some help paying for hsi two generic prescription drugs from his employers retiree coverage, but he wants to compare it to the part D coverage. He asks you what costs he would generally expect to encounter when enrolling into a standard Medicare D plan. What should you tell him?",
    answer:
      "he generally would pay a monthly premium, annual deductible and per - perscription cost sharing",
  },
  {
    question:
      "Mrs Duarte is enrolled in original medicare part a  and b. She has recently reviewed her medicare summary notice and disagrees with the determination that partially denied one of her claims for service. What advice would you give her?",
    answer:
      "Mrs. Duarte should file an appeal of the initial determination within 120 days of the date she received the notice in the mail",
  },
  {
    question:
      "Mr. Patel is in good heallth and is preparing a budget in anticipation of his retirement  when he turns 66. he wants to understand the health care costs he might be exposed to under medicare if he were to require hospitalization because of an illness. In general terms. What could you tell him?",
    answer:
      "Under Origianl medicare. there is a single deductible amount due fot the first 60 days of impatient hospital stays. after which it changes to a per day coinsurance through day 90. After day 90 he would pay a daily amount up to 60 days over his lifetime. Then he would be responsible for all costs",
  },
  {
    question:
      "Mr. xi will soon turn age 65 and has come to you for advice as to what services are provided under Original Medicare. What should you tell him?",
    answer:
      "Beneficiaries under original medicare have no cost-sharing for most preventative services.",
  },
  {
    question:
      "Mrs gonazalez is enrolled in Original medicare and has a medigap policy as well but it provides no drug coverage. She would like to keep her coverage but replace it with one that provides her drug coverage. What do you say?",
    answer:
      "There are no supp plans that include drugs but she could buy a separate PDP plan",
  },
  {
    question:
      "Anita Magri will turn age 65 in august 2023. Anita intends to enroll in Original Medicare A and B. She would also like a medigap (supplement policy) her neighbor told her about plan F. It not only covers travel benefits but also the plan b deducable. What do you tell her?",
    answer:
      "Medigap F plan is no longer available after 2020. Anita might try another plan that covers travel but not the plan B deductable",
  },
  {
    question:
      "Mrs Chen will be turning 65 soon. Has been a citizen for twelve years. has been employed full time and paid taxes. She is concerned that she won't qualify for plan A since she wasn't born here. What do you say?",
    answer:
      "Most individuals who are citizens and age 65 or over are covered under Part A by virtue of having paid medicare taes while working. Though some may be covered as a result of paying a premium.",
  },
  {
    question:
      "mrs Quinn recently turned 66 and decided after many years of work to retire and begin and receive social security benefits. Shortly after she recieved a letter informing her that she has been auto enrolled into part b. she wants to know what it means. What do you tell her?",
    answer:
      "Part B generally covers physicians. She will pay a monthly premium and aside from preventative services, she will generally pay 20% of all services rendered and a deductable",
  },
  {
    question:
      "Mrs. Shields is covered by Original Medicare. She sustained a hip fracture and is being successfully treated for that condition. However, she and her physicians feel that after her lengthy hospital stay, she will need a month or two of nursing and rehabilitative care. What should you tell them about Original Medicare's coverage of care in a skilled nursing facility?",
    answer:
      "Medicare will cover Mrs. Shield's skilled nursing services provided during the first Correct: Mrs. Foster has experienced a long hospital stay, over the 3 20 days of her stay, after which she would have a copay until she has been in the days to qualify for skilled nursing and rehabilitative care benefits facility for 100 days under Medicare.",
  },
  {
    question:
      "Mrs. Geisler's neighbor told her she should look at her Part D options during the annual Medicare enrollment period because the features of Part D might have changed. Mrs. Geisler can't remember what Part D is so she called you to ask what her neighbor was talking about. What could you tell her?",
    answer:
      " Part D covers prescription drugs and she should look at her premiums,  formulary and cost sharing to see if they have changed",
  },
  {
    question:
      "Mr. Rainey is experiencing paranoid delusions and his physician feels that he should be hospitalized. What should you tell Mr. Rainey (or his representative) about the length of an in patient psychiatric hospital stay and what medicare will cover?",
    answer:
      " Medicare will cover a total of one hundred nights of physciatric care during his life",
  },
  {
    question:
      "Mr. Davis is 52 years old and has recently been diagnosed with end-stage renal disease (ESRD) and will soon begin dialysis. He is wondering if he can obtain coverage under Medicare. What should you tell him?",
    answer:
      "He may sign up for medicare at any time however, coverage usually begins after the 4th month of dialisis",
  },
  {
    question:
      "Mrs. Wang wants to know generally how the benefits under Original Medicare might compare to the benefits package of a Medicare Advantage Plan before she starts looking at specific plans. What could you tell her?",
    answer:
      "medicare advantage may offer extra benefits that original medicare doesn't cover such as vision , hearing, and dental services. It must include a out of pocket limit on Part A and Part B services.",
  },
  {
    question:
      "Mr. Sanchez has just turned 65 and is entitled to Part A but has not enrolled in Part B because he has coverage through an employer plan. If he wants to enroll in a Medicare Advantage plan, what will he have to do?",
    answer: "he will have to enroll in part B",
  },
  {
    question:
      "Mr. Lopez has heard that he can sign up for a product called 'Medicare Advantage' but is not sure about what type of plan designs are available through this program. What should you tell him about the types of health plans that are available through the Medicare Advantage program?",
    answer: "There are medicare plans such as HMO's, PPO's, PFFS, and MSAs",
  },
  {
    question:
      "Mrs. Velasquez cares for her frail elderly mother, Maria, who lives in North Carolina. She is worried that without additional support, her mother will need to go into a nursing home. Mrs. Velasquez asks you if there is any Medicare plan that might allow her mother to remain in the community rather than going into a nursing home. How should you advise Mrs. Velasquez?",
    answer:
      "there are programs of all-inclusive care for the elderly (PACE) for frail elderly beneficiaries certified as needing a nursing home level of care but are able to live safely in the community at the time of environment.",
  },
  {
    question:
      "mr. Lombardi is interested in a medicare advantage (MA) PPO plan that you represent. it is one of three plans operated by the same organization in Mr. Lombardi's area. the MA PPO plan does not include drug coverage, but the other two plans do. Mr. Lombardi likes the PPO plan that does not include drug coverage and intends to obtain his drug coverage through a stand-alone Medicare prescription drug plan. What should you tell him about this situation?",
    answer:
      "He could enroll either in one of the ma plans that include prescription drug coverage or original medicare with a medigap plan and standalone part D drug coverage but he cannot enroll in the MA-only PPO plan and a standalone drug plan.",
  },
  {
    question:
      "Dr. Elizabeth Brennan does not contract with the ABC PFFS plan but accepts the plan's terms and conditions for payment. Mary Rodgers sees Dr. Brennan for treatment. How much may Dr. Brennan charge?",
    answer:
      "Dr. brennan can charge Mary Rogers no more thta the cost-sharing specified in the PFFS plans terms and conditions of payment which may include a 15% balance adjustment.",
  },
  {
    question:
      "Ms. Gibson recently lost her employer group health and drug coverage and now she wants to enroll in a PPO that does not include drug coverage. What should you tell her about obtaining drug coverage?",
    answer:
      "She can enroll in the PPO  but she will not be able to purchase a standalone Medicare Part D drug plan.",
  },
  {
    question:
      "Mr. Romero is 64, retiring soon, and considering enrollment in his employer-sponsored retiree group health plan that includes drug coverage with nominal copays. He heard about a neighbor's MA-PD plan that you represent and because he takes numerous prescription drugs, he is considering signing up for it. What should you tell him?",
    answer:
      "He should compare the benefits in his employer sponsored retiree plan to determine which one will provide sufficient coverage for his perscription needs.",
  },
  {
    question:
      "Mrs. Radford asks whether there are any special eligibility requirements for Medicare Advantage. What should you tell her?",
    answer:
      "Mrs. Radford must be entitled to Part A and enrolled in Part B to enroll into medicare advanatage.",
  },
  {
    question:
      "Mr. Kelly wants to know whether he is eligible to sign up for a private fee-for-service (PFFS) plan. What questions would you need to ask to determine his eligibility?",
    answer:
      "You would need to ask Mr. Kelly if he is entitled to part A, enrolled in part B and lives in the PFFS service area.",
  },
  {
    question:
      "Mr. Barker enjoys a comfortable retirement income. He recently had surgery and expected that he would have certain services and items covered by the plan with minimal out-of-pocket costs because his MA-PD coverage has been very good. However, when he received the bill, he was surprised to see large charges in excess of his maximum out-of-pocket limit that included some services and items he thought would be fully covered. He called you to ask what he could do? What could you tell him?",
    answer:
      "You can offer to review the plans appeal process to help him ask the plan to review the coverage decision",
  },
  {
    question:
      "Which of the following statement(s) is/are correct about a Medicare Savings Account (MSA) Plans?",
    answer:
      "MSA's may have either a partial network, full network or no network, MSA's plans cover Part A and B but do not cover plan D, non network providers must accept the same amount as Original Medicare would pay. ",
  },
  {
    question:
      "Mrs. Kelly, age 65, is entitled to Part A but has not yet enrolled in Part B. She is considering enrollment in a Medicare Advantage plan (Part C). What should you advise her to do before she can enroll in a Medicare Advantage plan?",
    answer: "To join medicare Advantage she alos must enroll in plan B",
  },
  {
    question:
      "Mrs. Chi is age 75 and enjoys a comfortable but not extremely high-income level. She wishes to enroll in a MA MSA plan that she heard about from her neighbor. She also wants to have prescription drug coverage since her doctor recently prescribed several expensive medications. Currently, she is enrolled in Original Medicare and a standalone Part D plan. How would you advise Mrs. Chi?",
    answer:
      "Mrs Chi may enroll in a MA MSA plan and remain in the current stand alone drug plan",
  },
  {
    question:
      "Mr. Wells is trying to understand the difference between Original Medicare and Medicare Advantage. What would be the correct description?",
    answer:
      "Medicare advantage is an orignal medicare alternate offered by an independent.",
  },
  {
    question:
      "One of your clients, Lauren Nichols, has heard about a Medicare concept from one of her neighbors called TrOOP. She asks you to explain it. What do you say?",
    answer:
      "Troop stands for true out of pocket costs that count towards the medicare part d catastropi limit and include  not only the expenses paid by the beneficiary but also in some instances amounts paid by or through qualified state pharmaceutical assistance programs.",
  },
  {
    question:
      "Mr. Hutchinson has drug coverage through his former employer's retiree plan. He is concerned about the Part D premium penalty if he does not enroll in a Medicare prescription drug plan, but does not want to purchase extra coverage that he will not need. What should you tell him?",
    answer:
      "If the drug coverage he has is not expected to pay on average at least as much as medicares plan d coverage then he will need to enroll in d to avoid penalties",
  },
  {
    question:
      "Mr. Hutchinson has drug coverage through his former employers retiree plan. He is concerned about the Part D premium penalty if he does not enroll in a Medicare prescription drug plan, but does not want to purchase extra coverage that he will not need. What should you tell him?",
    answer:
      "If a part d benefit is offered through her plan she may choose to enroll in that plan or a standaone PDP",
  },
  {
    question:
      "Mr. Shapiro gets by on a very small amount of fixed income. He has heard there may be extra help paying for Part D prescription drugs for Medicare beneficiaries with limited income. He wants to know whether he might qualify. What should you tell him?",
    answer:
      "The extra help is available to beneficiaries whose income and assets do not exceed annual limits specified by the government",
  },
  {
    question:
      "Who is most likely to benefit from the Medicare Prescription Payment Plan?",
    answer:
      "People who suffered medical costs early in the year because people paying later already have their payments spread out.",
  },
  {
    question:
      "Mr. Jacob understands that there is a standard Medicare Part D prescription drug benefit, but when he looks at information on various plans available in his area, he sees a wide range in what they charge for deductibles, premiums, and cost sharing. How can you explain this to him?",
    answer:
      "plans can cover things differently but they must be at least as good as the standard drug plan.",
  },
  {
    question:
      "Mr. and Mrs. Vaughn both take a specialized multivitamin prescription each day. Mr. Vaughn takes a prescription to help to regrow his hair. They are anxious to have their Medicare prescription drug plan cover these drug needs. What should you tell them??",
    answer:
      "Medicare perscription drug plans are not permittted to cover prescription meds the vaugns are interested in nor cosmetic nor vitimins but they might look at an adantage plan that offers them as a supplemental benefit.",
  },
];

//part 3 question 8

export default questions;
