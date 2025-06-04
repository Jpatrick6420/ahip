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
  {
    question:
      "Mr. Wingate is a newly enrolled Medicare Part D beneficiary and one of your clients. In addition to drugs on his plan's formulary, he takes several other medications. These include a prescription drug not on his plan's formulary, over-the-counter medications for colds and allergies, vitamins, and drugs from an Internet-based Canadian pharmacy to promote hair growth and reduce joint swelling. His neighbor recently told him about a concept called TrOOP and he asks you if any of his other medications could count toward TrOOP should he ever reach the Part D catastrophic limit. What should you say?",
    answer:
      "Some costs do not count towards Troop. That includes costs for drugs not on a Part D plan's formulary unless the beneficiary receives an exeception under which the plan covers the drug.",
  },
  {
    question:
      "Mrs. Allen has a rare condition for which two different brand name drugs are the only available treatment. She is concerned that since no generic prescription drug is available and these drugs are very high cost, she will not be able to find a Medicare Part D prescription drug plan that covers either one of them. What should you tell her?",
    answer:
      "Part D formularies must include at least two drugs in each theraputic category or not generic versions available. Mrs allen should be able to find a plan that covers a medication that she needs.",
  },
  {
    question:
      "Ms. Edwards is enrolled in a Medicare Advantage plan that includes prescription drug plan (PDP) coverage. She is traveling and wishes to fill two of the prescriptions that she has lost. How would you advise her?",
    answer:
      "She may fill prescriptions for covered drugs at non-network pharmacies but at a higher rate than at in-network pharmacies.",
  },
  {
    question:
      "Mr. Bickford did not quite qualify for the extra help low-income subsidy under the Medicare Part D Prescription Drug program and he is wondering if there is any other option he has for obtaining help with his considerable drug costs. What should you tell him?",
    answer:
      "He could check with the mamufacturer to see if they offer an assistance program to help people of limited means. alternative, he could check with his state and check for an assistance program.",
  },
  {
    question:
      "Mr. Hildalgo complains to you that because he takes multiple expensive drugs, he has trouble paying his cost sharing for his prescription drugs, particularly at the beginning of the year during the deductible phase. He is happy with his plan and does not want to change. However, he said he had heard about a new program called the Medicare Prescription Payment Plan and asked whether it might help. What do you tell him?",
    answer:
      "The medicare prescription payment plan helps spread payments for meds over an entire year.",
  },
  {
    question:
      "Mr. Carlini has heard that Medicare prescription drug plans are only offered through private companies under a program known as Medicare Advantage (MA), not by the government. He likes Original Medicare and does not want to sign up for an MA product, but he also wants prescription drug coverage. What should you tell him?",
    answer:
      "Correct: Mr. Carlini can stay in Original Medicare and obtain prescription drug benefits through a stand-alone Part D plan. He does not have to enroll in a MA plan..",
  },
  {
    question:
      "What types of tools can Medicare Part D prescription drug plans use that affect the way their enrollees can access medications?",
    answer:
      "Part D plans do not have to cover all medications. As a result formularies will very from each other but they must at least be as good as the standard set out by the state.",
  },
  {
    question:
      "Mr. Zachow has a condition for which three drugs are available. He has tried two but had an allergic reaction to them. Only the third drug works for him and it is not on his Part D plan's formulary. What could you tell him to do?",
    answer: "Zachow can fill out an exception form.",
  },
  {
    question:
      "Mrs. Roswell is a new Medicare beneficiary who has just retired from retail work. She is interested in selecting a Medicare Part D prescription drug plan. She takes several medications and is concerned that she has not been able to identify a plan that covers all of her medications. She does not want to make an abrupt change to new drugs that would be covered and asks what she should do. What should you tell her?",
    answer:
      "Every part d drug  plan is required to cover a one month fill of her existing medication sometime during the first 90 days.",
  },
  {
    question:
      "Mr. Torres has a small savings account. He would like to pay for his monthly Part D premiums with an automatic monthly withdrawal from his savings account until it is exhausted, and then have his premiums withheld from his Social Security check. What should you tell him?",
    answer: "the beneficiary must pick a payment method for a year",
  },
  {
    question:
      "Mr. Rice is 68, actively working, and has coverage for medical services and medications through his employer's group health plan. He is entitled to premium free Part A and thinking of enrolling in Part B and switching to an MA-PD because he is paying a very large part of his group coverage premium, and it does not provide coverage for a number of his medications. Which of the following is NOT a consideration when making the change?",
    answer: "Mr. rices retiree plan is not required to take him back",
  },
  {
    question:
      "Mrs. Mulcahy, age 65, is concerned that she may not qualify for enrollment in a Medicare prescription drug plan because, although she is entitled to Part A, she is not enrolled under Medicare Part B. What should you tell her?",
    answer:
      "She can enroll because she is eligible for Part A. She doesn't need to be enrolled in Part B for the drug plan",
  },
  {
    question:
      "Mrs. Hernandez is one of your clients. She has read that there is a new program that may help her manage prescription drug costs. What do you tell her about the Medicare Prescription Payment Plan?",
    answer:
      "Part D enrollees can opt into a prescription payment plan anytime throughout the year",
  },
  {
    question:
      "Winthrop Brokerage wishes to place an advertisement in the local newspaper that says: 'We offer Medicare Advantage plans offered by AB Health and Top Choice Health. Contact us if you would like to learn more0' .Which of the following best describes the obligation(s) of Winthrop Brokerage regarding the advertisement?",
    answer:
      "Winthrop Brokerage does not need to submit the advertisement to CMS because it doesn't include details about the plans benefit structure or copayment structure",
  },
  {
    question:
      "Next week you will be participating in your first 'educational event' for prospective enrollees. To be sure that you do not violate any of the applicable guidelines, in what activities should you plan to engage?",
    answer:
      "Correct: Sales presentations and distribution or acceptance of enrollment forms are prohibited when an event is advertised as educational.",
  },
  {
    question:
      "Agent jennings makes a presentation on Medicare advertised as an educational event. Agent Jennings distributes materials that are solely educational. However, she gives a brief presentation that mentions plan-specific premiums. Is this a prohibited activity at an event that has been advertised as educational?",
    answer:
      "Yes. When an event is advertised as educational, discussing plan specific premiums is impermissable.",
  },
  {
    question:
      "One of your colleagues argues that it is better to focus your time and energy exclusively on neighborhoods with single-family homes. He further argues that their older owners are more likely to have higher incomes and purchase the Medicare Advantage products you represent compared to those living in apartment complexes. How should you respond?",
    answer: "This is considered discriminatory and prohibited",
  },
  {
    question:
      "During a sales presentation to Ms. Daley for a Medicare Advantage plan that has a 5-star rating in customer service and care coordination, and received an overall plan performance rating of a 4-star, which of the following would be the best statement to say to her?",
    answer:
      "The medicare advantage plan received a 5 star rating in customer service and care cordination with an ovrall rating of 4 stars",
  },
  {
    question:
      "By contacting plans avallable in your area, you have learned that the plan you represent has a significantly lower monthly premium than the others. Furthermore, you see that the plan you represent has a unique benefits package. What shouldlyou do to make sure your clients know about these pieces of information?",
    answer:
      "You may make comparisons between plans if you can support them with studies or stats and such comparisons are fact based",
  },
  {
    question:
      "When you market Medicare Advantage and Part D plans, what may you offer as a gift to induce enrollment in a plan?",
    answer:
      "You may provide gifts or prices to all potential enrollees during the event that don't exceed 15 dollars",
  },
  {
    question:
      "If you are to comply with Medicare's guidance regarding educational events, which of the following would be acceptable activities?",
    answer:
      "You may distribute business careds to individuals who request information on how to contact you for further details",
  },
  {
    question:
      "Your colleague works at a third-party marketing organization (TMO) and she said she did not need to take the Medicare training for brokers and agents or pass a test to market Medicare plans since her contract is with the TMO, not the plans that have the products she sells. What could you say to her?",
    answer:
      "You cold tell her she is wrong and that only agents selling employeer/union group plans are permitted are exempt from testing but some may still require testing. ",
  },
  {
    question:
      "You will be holding a sales event soon, at which you would like to offer door prizes to attendees. Under guidelines from the Medicare agency, what types of gifts or prizes would not be allowed in this Situation?",
    answer:
      "Gift cards of gift certificates of $ 15 that can be easily converted to cash. ",
  },
  {
    question:
      "While making an appointment to discuss Medicare Advantage (MA) and Part D plans with a potential enrollee, you are asked to describe other types of insurance products that your client might wish to purchase, What additional types of insurance can you present during the MA and Part D marketing appointments?",
    answer: "You can present only health care related products ",
  },
  {
    question:
      "You would like to market a MA plan at a neighborhood pharmacy. What should you keep in mind to comply with the marketing requirements for MA plans?",
    answer:
      "Incorrect: Marketing representatives must not engage in marketing activities where patients receive health care services such as a pharmacy counter area. Marketing activities would include accepting enrollment applications.",
  },
  {
    question:
      "You have set up an appointment for an in home sales presentation with Mrs. Fernandez, who expressed interest in the Medicare plans you represent. In preparation for the sales presentation, What must you do?",
    answer:
      "Correct: Before any marketing appointment, you must identify the types of plans that you will discuss as well as obtain an agreement from her and document such agreement through a scope of appointment.",
  },
  {
    question:
      "You are mailing invitations to new Medicare beneficiaries for a marketing event. You want an idea of how many people to expect, so you would like to request RSVPs. What should you keep in mind?",
    answer:
      "Correct: At marketing/sales events, agents may not require beneficiaries to provide contact information as a prerequisite for attending the event. This includes requiring an email address or other contact information as a condition to RSVP for an event.",
  },
  {
    question:
      "You market many different types of insurance and ordinarily you spend time each evening calling potential clients. To comply with requirements for marketing Medicare Advantage and Part D plans, what must you do about contacting potential clients to market those plansi?",
    answer:
      "You will have to avoid calling any potential client unless he or she initiates you a contact with you.",
  },
  {
    question:
      "Mr. Prentice has many clients who are Medicare beneficiaries. He should review the Centers for Medicare & Medicaid Services (CMS) Communication and Marketing Guidelines to ensure he is compliant with which type of products?",
    answer: "The CMS communication guidelines apply to MA and PDP plans.",
  },
  {
    question:
      "Agent Harriet Walker has recently begun marketing Medicare Advantage and related products aimed at meeting the needs of senior citizens. Client Mildred Jones has expressed interest in a Medicare Advantage plan. It is now the beginning of September. If you were in Agent Walker's position, what Would you do?",
    answer:
      "Inquire whether the client qualifies for a specific enrollement period and if not solicit an enorollement app once the annual enrollement period begins on oct 15th.",
  },
  {
    question:
      "You plan to participate in an educational event sponsored by a large regional health care system, One of your colleagues suggests that you do a presentation on one of the Medicare Health plans you market and modity it to include information about preventive screening tests showcased at the event. How should you respond to your colleague's suggestion?",
    answer:
      "You should tellyour colleage no because participation in an educational event cannot include a sales presentation",
  },
  {
    question:
      "A Medicare beneficiary has walked into your office and requested that you sit down with her and discuss her options under the Medicare Advantage program. Before engaging in such a discussion, what should you do?",
    answer:
      "you must document your agreement to discuss MA options in the scope of the appointment",
  },
  {
    question:
      "You are meeting with Mrs. Hall in her home. On her scope of appointment form, she asked to discuss Medicare Advantage plans. During the meeting, she asked to discuss a stand-alone prescription drug plan. She is leaving the next day to visit her family for a week in another state, so she needs to decide before she leaves. What must happen before that additional discussion can take place?",
    answer:
      "Since MRs hall specifically asked you to discuss the PDP you can as long as you fill out a new scope of appointment first indicating that she want to talk about it with you.",
  },
  {
    question:
      "Which of the following individuals has enrolled in a plan based on a fixed enrollment period?",
    answer:
      "Ben enrolls in a MA plan during the medicare advantage open enrollment period (MA OEP).",
  },
  {
    question:
      "Ms. Lee is enrolled in an MA-PD plan but will be moving out of the plan's service area next month. She is worried that she will not be able to enroll in another plan available in her new residence until the Annual Election Period. What should you tell her?",
    answer:
      "She is elegible for a SEP that begins one month befor her perm move. If the plan is notified in advance or the month she provides notice of the move and lasts for 2 months.",
  },
  {
    question:
      "Mrs. Young is currently enrolled in Original Medicare (Parts A and B), but she has been working with Agent Neil Adams in the selection of a Medicare Advantage (MA) plan. It is mid-September, and Mrs. Young is going on vacation. Agent Adams is considering suggesting that he and Mrs. Young complete the application together before she leaves. He will then submit the paper application before the start of the annual enrollment period (AEP). What would you say If you were advising Agent Adams?",
    answer:
      "This is a bad idea. Agents generally are prohibited from soliciting or accepting an enrollment form before the start of AEP.",
  },
  {
    question:
      "Mr. Rodriguez is currently enrolled in a MA plan, but his plan doesn't sufficiently cover his prescription drug needs. He is interested in changing plans during the upcoming MA Open Enrollment Period. What are his options during the MA OEP?",
    answer:
      "He is permitted to change to Original Medicare with a PDP during the MA OEP. However, beneficiaries may only change plans once during this period.",
  },
  {
    question:
      'Ms. Claggett is sixty-six (66) years old. She has been covered under Original Medicare for the last six years due to her disability and has never been enrolled in a Medicare Advantage or a Part D plan before. She wants to enroll in a Part D plan. She knows that there is such a thing as the "Part D Initial Enrollment Period" (IEP) and has concluded that, since she has never enrolled in such a plan before, she should be eligible to enroll under this period. What should you tell her about how the Part D Initial Enrollment Period applies to her situation?',
    answer:
      "Ms. Claggett has had two IEP's and missed them both. Once when first eligimble and the second when she turned 65.",
  },
  {
    question:
      "Mr. Block is currently enrolled in a Medicare Advantage plan that includes drug coverage. He found a stand-alone Medicare prescription drug plan in his area that offers better coverage than that available through his MA-PD plan and in addition, has a low premium. It won't cost him much more and, because he has the means to do so, he wishes to enroll in the stand-alone prescription drug plan in addition to his MA-PD plan. What should you tell him?",
    answer:
      "If Mr. Block enrolls in the stand alone MD plan he will be disenrolled from his current plan",
  },
  {
    question:
      "Mrs. Pierce would like to enroll in a Medicare Cost plan that offers Part D prescription drug coverage. She comes to you for advice about when she can enroll in a plan you have previously discussed. What should you tell her?",
    answer:
      "Cost plans offering part D coverage  may only make the benefit available during enroll periods available under the part D program",
  },
  {
    question:
      "Mr. Garcia was told he qualifies for a special election period (SEP), but he lost the paper that explains what he could do during the SEP. What can you tell him?",
    answer:
      "If the SEP is for MA coverage he will generally have one opportunty to change his MA coverage",
  },
  {
    question:
      "Mr. Liu turns 65 on June 19. He has never previously qualified for Medicare so his first Medicare eligibility date will be June 1. Mr. Liu's ICEP and Part D IEP begin on March 1 and end on September 30. He wants prescription drug coverage with his Part A and Part B benefits. What advice can you provide him?",
    answer:
      "As long as he enrolls in Part B and is entitled to part A . He may enroll in a MA-PD",
  },
  {
    question:
      "Mr. Yoo's employer has recently dropped comprehensive creditable prescription drug coverage that was offered to company retirees. The company told Mr. Yoo that, because he was affected by this change, he would qualify for a special election period. Mr. Yoo contacted you to find out more about what this means. What can you tell him?",
    answer:
      "It means that he qualifies for a one-time opportunity to enroll in an MA-PD or part d drug plan",
  },
  {
    question:
      "Mr. Chen is enrolled in his employer's group health plan and will be retiring soon. He would like to know his options since he has decided to drop his retiree coverage and is eligible for Medicare. What should you tell him?",
    answer:
      "Mr. Chen can disenroll from his employer-sponsored coverage to elect a  MA or Part D plan within 2 months of his disenrollment",
  },
  {
    question:
      "Mrs. Kendrick is in good health, has worked for many years, and is six months away from turning 65. She wants to know what she will have to do to enroll in a Medicare Advantage (MA) plan as soon as possible. What could you tell her?",
    answer:
      "She may enroll in an MA plan beginning 3 months befor her first entitlement to both plan a and b",
  },
  {
    question:
      "Mr. Ford enrolled in an MA-only plan in mid-November during the Annual Election Period (AEP). On December 1, he calls you up and says that he has changed his mind and would like to enroll in a MA-PD plan. What enrollment rules would apply in this case?",
    answer: "He can make as many changes as he likes but the last one stands",
  },
  {
    question:
      "Mrs. Ridgeway enrolled in Original Medicare and Medigap coverage following her retirement several years ago. Four months ago, Mrs. Ridgeway dropped her Medigap policy to enroll in a Medicare Advantage (MA) plan for the first time. Unfortunately, Mrs. Ridgeway has found that many of her providers are not in the MA plans network. She has come to you for advice. What should you tell her?",
    answer:
      "She qualifies for a SEP that allows her a one time decision to return to original medicare but not to select another MA plan",
  },
  {
    question:
      "Ms. Thomas has worked for many years and is turning 68 in June. She is eligible for Medicare Part A and did not enroll for Part B when first eligible because she has insurance through her employer - Coffee Brew, Inc. She also did not enroll in Part D because she had creditable coverage. She would like to retire in June and enroll in a Medicare Advantage plan. She has been informed that her group coverage will end on her retirement effective date. How would you advise Ms. Thomas?",
    answer:
      "Correct: To enroll in a MA or MA-PD plan, Ms. Thomas must be not only eligible for Part A but also enrolled in Part B. This will allow her to review her options and select coverage comparable to employer group coverage. Those disenrolling from employer-sponsored coverage to elect a MA or MA-PD plan have a SEP that ends 2 months after the employer-sponsored coverage ends in June.",
  },
  {
    question:
      "Mr. Wendt suffers from diabetes which has gotten progressively worse during the last year. He is currently enrolled in Original Medicare (Parts A and B) and a Part D prescription drug plan and did not enroll in a Medicare Advantage (MA) plan during the last annual open enrollment period (AEP) which has just closed. Mr. Wendt has heard certain MA plans might provide him with more specialized coverage for his diabetes and wants to know if he must wait until the next annual open enrollment period (AEP) before enrolling in such a plan. What should you tell him?",
    answer:
      "If there is a SNP plan in Mr. wendts area than he can enroll in it at any time.",
  },
  {
    question:
      "Mr. and Mrs. Nunez attended one of your sales presentations. They've asked you to come to their home to clear up a few questions. During the presentation, Mrs, Nunez feels tired and tells you that her husband can finish things up. She goes to bed. At the end of your discussion, Mr. Nunez says that he wants to enroll both himself and his wife. What should you do?",
    answer:
      "As long as she can do so. She must wake up and sign the application.",
  },
  {
    question:
      "Mr. Anderson is a very organized individual and has filled out and brought to you an enrollment form on October 10 for a new plan available on January 1 next year. He is currently enrolled in Original Medicare. What should you do?",
    answer:
      "Tell mr. anderson that you cannot accept the enrollment forms until AEP begins",
  },
  {
    question:
      "Which of the following individuals are likely to qualify for a special election period (SEP) for either a MA and/or Part D due to a change of residence?",
    answer:
      "Moves across country, moves to a place where there is a plan d available when there wasn't one before, makes a permenent move to another state providing him with new options.",
  },
  {
    question:
      'Mrs. Schmidt is moving and a friend told her she might qualify for a "special election period" to enroll in a new Medicare Advantage plan. She contacted you to ask what a special election period is. What could you tell her?',
    answer:
      "Correct. MA eligible and Part D eligible beneficiaries who experience certain qualifying events, such as a change in residence, are provided a special period to change their election, known as a special election period or SEP.",
  },
];

//part 3 question 8

export default questions;
