const quizData = [
    {
        question: "1. A hand signal by a driver as shown in the figure indicates that vehicle will slow down or stop.",
        image: "img/question1.jpg",
        answer: "T",
        explanation: "This sign means slow down or stop."
    },
    {
        question: "2. Vehicles must not overtake, but permitted to pass other vehicles at a pedestrian or the bicycle zone, or 30 meter before on one.",
        image: "img/question2.jpg",
        answer: "F",
        explanation: "Not permitted for pass also."
    },
    {
        question: "3. A vehicle facing this traffic light must stop and watch for traffic.",
        image: "img/question3.jpg",
        answer: "F",
        explanation: "No need to stop. Watch/watching."
    },
    {
        question: "4. When driving near a school bus which has stopped to pick up or drop off pupil, drivers may proceed without slowing down and check safety.",
        image: "img/question4.jpg",
        answer: "F",
        explanation: "Need to slow down. Without slowing down."
    },
    {
        question: "5. When turning right in as intersection with a pavement marking as shown in the figure, vehicles must proceed along the arrows.",
        image: "img/question5.jpg",
        answer: "T",
        explanation: "As same as question. No picture"
    },
    {
        question: "6. All light-duty vehicles can advance slowly.",
        image: "img/question6.jpg",
        answer: "F",
        explanation: "No overtaking signs. Automatic."
    },
    {
        question: "7. Vehicles and streetcars must not exceed driving at speed of 30Km/hr. or more.",
        image: "img/question7.jpg",
        answer: "F",
        explanation: "Can speed in 30 km/h. More."
    },
    {
        question: "8. Even if the traffic light for an intersection road is red, it does not necessary mean that the light for your traffic is always green.",
        image: "img/question8.jpg",
        answer: "T",
        explanation: "As same as question. No words (Be careful if the same question and there is !it is not necessary! then answer will be also TRUE)"
    },
    {
        question: "9. Overtaking requires complicated driving technique such a changing lanes, accelerating, and returning to the same lane.",
        image: "img/question9.jpg",
        answer: "T",
        explanation: "As same as question. No words"
    },
    {
        question: "10. This marking means that parking and stopping are prohibited.",
        image: "img/question10.jpg",
        answer: "T",
        explanation: "This marking means no parking or stopping. no words (no parking/not parking)"
    },
    {
        question: "11. When you practice driving with a learner's permit you must attach a beginner's mark to the front and rear of the vehicle.",
        image: "img/question11.jpg",
        answer: "F",
        explanation: "No beginner's mark, learners permit mark necessary."
    },
    {
        question: "12. You must slow down when you pass the road with this traffic sign.",
        image: "img/question12.jpg",
        answer: "T",
        explanation: "Same as question slow down."
    },
    {
        question: "13. A license holder who has possessed a regular license for less than one year must put this sign on the visible place of the vehicle.",
        image: "img/question13.jpg",
        answer: "F",
        explanation: "Beginner's mark is necessary not this mark."
    },
    {
        question: "14. The car in the picture is parked illegally.",
        image: "img/question14.jpg",
        answer: "F",
        explanation: "Not illegal, No parking start from this sign."
    },
    {
        question: "15. A person who has a license for a moped can drive a moped and light duty special vehicle.",
        image: "img/question15.jpg",
        answer: "F",
        explanation: "Can drive moped only."
    },
    {
        question: "16. At a road with this marking in the figure car proceeding on lane B can change its course to lane A.",
        image: "img/question16.jpg",
        answer: "F",
        explanation: "Can not change the yellow solid line."
    },
    {
        question: "17. If emergency vehicle approaches, you must change lane to let it pass even when you are travelling the designated lane.",
        image: "img/question17.jpg",
        answer: "F",
        explanation: "No need to change lane. Emergency Vehicle……travelling……Lane"
    },
    {
        question: "18. On the road with this sign parking is permitted from 8-20.",
        image: "img/question18.jpg",
        answer: "F",
        explanation: "Parking Prohibited.Permitted"
    },
    {
        question: "19. You must proceed slowly when you pass the intersection with poor visibility where traffic signal is installed.",
        image: "img/question19.jpg",
        answer: "F",
        explanation: "No need to slow where traffic signal is installed.Poor Visibility"
    },
    {
        question: "20. This traffic sign and marking have the same meaning.",
        image: "img/question20.jpg",
        answer: "T",
        explanation: "Same as question.No Picture"
    },
    {
        question: "21. When the accelerator pedal is depressed suddenly while driving, an automatic transmission will automatically shift to lower gear, enabling the vehicle to accelerate suddenly.",
        image: "img/question21.jpg",
        answer: "T",
        explanation: "Same as question. No Words"
    },
    {
        question: "22. When the cars approach the intersection where the width of each road is the same, car A must not obstruct the path of car B.",
        image: "img/question22.jpg",
        answer: "F",
        explanation: "Car B must give a way. Automatic"
    },
    {
        question: "23. If you can confirm safety you can proceed without slowing down when you pass near the school bus stopping on the road.",
        image: "img/question23.jpg",
        answer: "F",
        explanation: "Must slow down. Without slowing down."
    },
    {
        question: "24. You can turn left at an intersection with this sign regardless of the traffic light.",
        image: "img/question24.jpg",
        answer: "F",
        explanation: "This is one way sign. Automatic"
    },
    {
        question: "25. You must not overtake or pass other cars in area within 30 meters from the crosswalk or bicycle crossing lanes.",
        image: "img/question25.jpg",
        answer: "T",
        explanation: "Same as question. No words"
    },
    {
        question: "26. This sign marking indicates that the lane is for buses only so other vehicle (except for mopeds, light-duty special vehicles) are prohibited to travel the lane.",
        image: "img/question26.jpg",
        answer: "F",
        explanation: "This is bus priority sign. Not buses only. Travel"
    },
    {
        question: "27. On the road with this sign, you must stop just before the stop line. If there is no stop line, you must stop just before the intersection.",
        image: "img/question27.jpg",
        answer: "T",
        explanation: "Same as question. (Must stop = True)"
    },
    {
        question: "28. You should proceed slowly even if it is clear that nobody is at the pedestrian crossing or at the bicycle crossing zone.",
        image: "img/question28.jpg",
        answer: "F",
        explanation: "No need to slow when clear. Clear that nobody."
    },
    {
        question: "29. The car in this figure cannot change lanes to go straight at the intersection.",
        image: "img/question29.jpg",
        answer: "T",
        explanation: "Same as question. No words"
    },
    {
        question: "30. When you pass a person with a white or yellow cane, or a physically challenged person in a wheelchair, it is safe to pass them by sounding the horn and warn them.",
        image: "img/question30.jpg",
        answer: "F",
        explanation: "Need to slow down or stop don’t sound to horn. Warn them "
    },
    // Page 4
    {
        question: "31. This traffic marking means 'no entry zone'.",
        image: "img/question31.jpg",
        answer: "T",
        explanation: "Same as picture. No picture"
    },
    {
        question: "32. When you drive the road with no sidewalk or zone, you should not enter the side strip {the area which is 0.5 meter away from the road}.",
        image: "img/question32.jpg",
        answer: "T",
        explanation: "Same as question. No word"
    },
    {
        question: "33. Road in order to overtake {overtaking without entering right side of the road is permitted}.",
        image: "img/question33.jpg",
        answer: "T",
        explanation: "Overtaking is allowed without entering the right side of the road."
    },
    {
        question: "34. It is not necessary for driver to check for the traffic when passengers get in or out the vehicle.",
        image: "img/question34.jpg",
        answer: "F",
        explanation: "Drivers must always check for traffic when passengers are entering or exiting the vehicle."
    },
    {
        question: "35. You must not cross at a place where these traffic signs are shown.",
        image: "img/question35.jpg",
        answer: "T",
        explanation: "Crossing is prohibited where these signs are present."
    },
    {
        question: "36. When you park an automatic transmission car on an uphill you should shift the gear into L.",
        image: "img/question36.jpg",
        answer: "F",
        explanation: "You should shift the gear to 'P' (Park) and use the parking brake when parking uphill."
    },
    {
        question: "37. On the road in this picture, you can enter the right side of the road to overtake a vehicle ahead.",
        image: "img/question37.jpg",
        answer: "F",
        explanation: "The road marking allows overtaking on the right side."
    },
    {
        question: "38. When you pass by a parked car, you should keep a safe distance or proceed slowly because the door of the parked car might suddenly open.",
        image: "img/question38.jpg",
        answer: "T",
        explanation: "Maintaining a safe distance or proceeding slowly helps avoid accidents from suddenly opened car doors."
    },
    {
        question: "39. This marking indicated that you must give way to other cars ahead.",
        image: "img/question39.jpg",
        answer: "F",
        explanation: "The marking indicates a yield to other vehicles."
    },
    {
        question: "40. You must fulfill the requirements for driving as stated in your driver's license. (AT, wearing glasses, etc.)",
        image: "img/question40.jpg",
        answer: "T",
        explanation: "Drivers must adhere to the conditions specified in their license, such as wearing glasses if required."
    },
    {
        question: "41. This road sign indicated that parking of a car or motorcycle is prohibited.",
        image: "img/question41.jpg",
        answer: "F",
        explanation: "Closed to these vehicles. Automatic"
    },
    {
        question: "42. On a one-way road a vehicle can enter the right side of the road.",
        image: "img/question42.jpg",
        answer: "T",
        explanation: "Vehicles on a one-way road can enter the right side."
    },
    {
        question: "43. This hand signal by police officer in this picture means red light for the traffic indicated in the arrow.",
        image: "img/question43.jpg",
        answer: "F",
        explanation: "The hand signal indicates a red light for the directed traffic."
    },
    {
        question: "44. You are at an intersection to turn right; you must not obstruct other vehicles going straight or turning left.",
        image: "img/question44.jpg",
        answer: "T",
        explanation: "You should not obstruct vehicles going straight or turning left when you are turning right."
    },
    {
        question: "45. This sign means that you can only go straight.",
        image: "img/question45.jpg",
        answer: "F",
        explanation: "The sign indicates that only straight movement is allowed."
    },
    {
        question: "46. Vehicles must stop when cross the sidewalk in order to enter the lot even if there are no pedestrian.",
        image: "img/question46.jpg",
        answer: "T",
        explanation: "Vehicles must stop before crossing a sidewalk to enter a lot, regardless of pedestrian presence."
    },
    {
        question: "47. When vehicles ahead stopped or slowed down at an intersection, etc. Cutting in front of them is prohibited.",
        image: "img/question47.jpg",
        answer: "T",
        explanation: "Cutting in front of stopped or slowed vehicles at an intersection is prohibited."
    },
    {
        question: "48. When a police officer controlling traffic, holding his/her arms straight up {vertically} at an intersection, this hand signal has the same meaning as yellow light for traffic proceeding parallel to the stance of the police.",
        image: "img/question48.jpg",
        answer: "T",
        explanation: "The hand signal with arms held straight up indicates the same as a yellow light."
    },
    {
        question: "49. For the correct operation of the gearshift of an automatic transmission vehicle is to put it in the 'D' position to move forward 'R' position to reverse and the 'P' position to park the vehicle.",
        image: "img/question49.jpg",
        answer: "T",
        explanation: "The 'D' position is for driving forward, 'R' for reverse, and 'P' for parking in automatic transmission vehicles."
    },
    {
        question: "50. Riders must ride two-wheeled vehicles with correct posture, otherwise braking could throw the rider off balance the forward.",
        image: "img/question50.jpg",
        answer: "T",
        explanation: "Riders need to maintain correct posture to avoid losing balance while braking."
    },
    // Page 6
    {
        question: "51. If you were in the crossing gate which is down or about to go down, you can proceed through the railroad even when its warning bell is ringing.",
        image: "img/question51.jpg",
        answer: "F",
        explanation: "You should never proceed through a railroad crossing when the gate is down or about to go down, even if the warning bell is ringing."
    },
    {
        question: "52. A vehicle facing this traffic light does not need to stop at an intersection if it can watch out or traffic.",
        image: "img/question52.jpg",
        answer: "F",
        explanation: "Vehicles must stop at an intersection when facing a red traffic light regardless of traffic conditions."
    },
    {
        question: "53. You may stop your car inside the 'No Stopping Zone' in front of the police or fire station if there are no emergency vehicles coming out.",
        image: "img/question53.jpg",
        answer: "F",
        explanation: "Stopping inside a 'No Stopping Zone' is prohibited at all times, regardless of the presence of emergency vehicles."
    },
    {
        question: "54. When the cars approach the intersection where the width of each road is the same. The car A must not obstruct the path of the car B.",
        image: "img/question54.jpg",
        answer: "F",
        explanation: "When the roads are of equal width at an intersection, vehicles must yield appropriately to avoid obstructing other cars."
    },
    {
        question: "55. When you drive the road with no sidewalk or pedestrian zone, you cannot enter the shoulder. {The area which is 0.5 meter away from the edge of that road}.",
        image: "img/question55.jpg",
        answer: "T",
        explanation: "Entering the shoulder area of a road with no sidewalk or pedestrian zone is prohibited."
    },
    {
        question: "56. The sign does not prohibit mopeds from moving on the road.",
        image: "img/question56.jpg",
        answer: "T",
        explanation: "Certain signs do prohibit mopeds from moving on the road, and these must be observed."
    },
    {
        question: "57. If you have a learner's permit for a regular license, you can ride a moped for practice on the road.",
        image: "img/question57.jpg",
        answer: "F",
        explanation: "A learner's permit for a regular license does not permit riding a moped for practice on the road."
    },
    {
        question: "58. This road sign means 'right of way'.",
        image: "img/question58.jpg",
        answer: "T",
        explanation: "The road sign indicates that vehicles have the right of way."
    },
    {
        question: "59. You must keep a safe distance or slow down when you pass near the pedestrian and bicycle.",
        image: "img/question59.jpg",
        answer: "T",
        explanation: "Maintaining a safe distance or slowing down near pedestrians and bicycles is essential for their safety."
    },
    {
        question: "60. This road marking indicates there is a pedestrian crossing ahead.",
        image: "img/question60.jpg",
        answer: "T",
        explanation: "The road marking signifies an upcoming pedestrian crossing."
    },
    {
        question: "61. When traffic light change to yellow at the intersection, you may proceed by paying attention to other traffic even if you can stop safely at the stopping point.",
        image: "img/question61.jpg",
        answer: "F",
        explanation: "You should stop safely at the stopping point if the traffic light changes to yellow, unless it is unsafe to do so."
    },
    {
        question: "62. The car shown in this picture is parked illegally.",
        image: "img/question62.jpg",
        answer: "T",
        explanation: "The car is parked in a manner that violates parking regulations."
    },
    {
        question: "63. You were taking on your cellphone held in your hand because you recall something to deal with urgently while waiting at the traffic light. While continuing talking on the phone.",
        image: "img/question63.jpg",
        answer: "F",
        explanation: "Using a handheld cellphone while driving is prohibited, including when stopped at a traffic light."
    },
    {
        question: "64. This sign shows 'road narrows'.",
        image: "img/question64.jpg",
        answer: "T",
        explanation: "The sign indicates that the road narrows ahead."
    },
    {
        question: "65. Riders must ride two-wheeled vehicles with the correct posture otherwise sudden braking could throw the rider off balance and forward distance.",
        image: "img/question65.jpg",
        answer: "T",
        explanation: "Maintaining correct posture while riding a two-wheeled vehicle is essential to avoid losing balance during sudden braking."
    },
    {
        question: "66. This hand signal by the police officer is this picture is the same as the green light for the traffic indicated with an arrow.",
        image: "img/question66.jpg",
        answer: "T",
        explanation: "The hand signal by the police officer is equivalent to a green light for the directed traffic."
    },
    {
        question: "67. A comfortable driving position is where your knees are fully stretched when you place your foot on a clutched pedal.",
        image: "img/question67.jpg",
        answer: "F",
        explanation: "A comfortable driving position should allow slight bend in the knees for better control and comfort."
    },
    {
        question: "68. This sign means 'bicycle only'.",
        image: "img/question68.jpg",
        answer: "F",
        explanation: "The sign indicates that the path is designated for bicycles only."
    },
    {
        question: "69. On the road with this sign parking and stopping is prohibited from 8 to 20.",
        image: "img/question69.jpg",
        answer: "T",
        explanation: "The sign indicates that parking and stopping are prohibited from 8 AM to 8 PM."
    },
    {
        question: "70. The holder of a learner's permit can be identified with the copy of the original permit so if you carry the copy while practicing driving it is not necessary to carry the original permit.",
        image: "img/question70.jpg",
        answer: "F",
        explanation: "The original permit must be carried while practicing driving, a copy is not sufficient."
    },
    // Page 8
    {
        question: "71. A learner's permit holder must practice driving by placing this sign on the designated place of the front and rear of the vehicle.",
        image: "img/question71.jpg",
        answer: "T",
        explanation: "A learner's permit holder must display the learner's mark on the vehicle."
    },
    {
        question: "72. When an emergency vehicle approaches you on the road other than one-way street, you must give way to the emergency vehicle by pulling over to the left and coming to a stop.",
        image: "img/question72.jpg",
        answer: "F",
        explanation: "You must pull over to the left and stop to give way to an approaching emergency vehicle."
    },
    {
        question: "73. When facing a signal changed to yellow, if you can stop safely, you can proceed through the intersection.",
        image: "img/question73.jpg",
        answer: "F",
        explanation: "If you can stop safely at a yellow signal, you must stop."
    },
    {
        question: "74. Indicates the end of the section or zone where the traffic regulation shown by the main sign ends.",
        image: "img/question74.jpg",
        answer: "T",
        explanation: "This sign indicates the end of the traffic regulation zone."
    },
    {
        question: "75. Drivers must drive carefully, proceeding the action and exercise caution towards the movement of pedestrian and bicycle.",
        image: "img/question75.jpg",
        answer: "T",
        explanation: "Drivers must exercise caution towards pedestrians and bicycles."
    },
    {
        question: "76. Getting flat tire while riding a two-wheeled vehicle, the driver may walk the vehicle on the sidewalk to a repair shop nearby sidewalk while the engine is running.",
        image: "img/question76.jpg",
        answer: "F",
        explanation: "You should not walk a two-wheeled vehicle with a flat tire on the sidewalk with the engine running."
    },
    {
        question: "77. The police officer's hand signal in the figure has the same meaning as the red light for the traffic proceeding in the direction of the arrows.",
        image: "img/question77.jpg",
        answer: "F",
        explanation: "This means yellow not red light."
    },
    {
        question: "78. On a road where there is a solid yellow line at the center, drivers are not allowed to enter the right side of the road where visibility is good.",
        image: "img/question78.jpg",
        answer: "T",
        explanation: "Entering the right side of the road is prohibited where there is a solid yellow line at the center."
    },
    {
        question: "79. When the facing signal change to yellow and if you cannot stop safely, you can proceed through the intersection.",
        image: "img/question79.jpg",
        answer: "T",
        explanation: "If you cannot stop safely at a yellow signal, you may proceed through the intersection."
    },
    {
        question: "80. People involved in accidents in crosswalk should give a first aid and reporting to police responsibility for accidents.",
        image: "img/question80.jpg",
        answer: "T",
        explanation: "First aid should be provided, and the accident should be reported to the police."
    },
    {
        question: "81. Crossing into the right side of the road to overtake another vehicle must minimize as much as possible.",
        image: "img/question81.jpg",
        answer: "T",
        explanation: "Overtaking by crossing into the right side should be minimized."
    },
    {
        question: "82. You must stop at the stopping line or behind the near side of the intersection when the stopping line does not exist at an intersection where the sign is.",
        image: "img/question82.jpg",
        answer: "T",
        explanation: "You must stop at the stopping line or behind the near side of the intersection if there is no stopping line."
    },
    {
        question: "83. A traffic sign shown in this figure indicates that there is a school or kindergarten pupils nearby.",
        image: "img/question83.jpg",
        answer: "F",
        explanation: "The sign indicates the presence of a school or kindergarten nearby."
    },
    {
        question: "84. The user or driver of the vehicle with a determination of an illegally parked left vehicle sticker attached or a person who has responsibility to maintain the vehicle can remove the sticker.",
        image: "img/question84.jpg",
        answer: "T",
        explanation: "The responsible person can remove the sticker of an illegally parked vehicle."
    },
    {
        question: "85. This two signs mean 'end regulation'.",
        image: "img/question85.jpg",
        answer: "F",
        explanation: "The signs indicate the end of a regulation."
    },
    {
        question: "86. When driver's arms extended diagonally it indicates to slow down or to stop.",
        image: "img/question86.jpg",
        answer: "F",
        explanation: "Extended arms diagonally indicate to slow down or stop."
    },
    {
        question: "87. Where there is a traffic sign as shown in the figure vehicles must proceed slowly.",
        image: "img/question87.jpg",
        answer: "T",
        explanation: "The sign indicates that vehicles must proceed slowly."
    },
    {
        question: "88. The mark designated at the front and rear end of the vehicle is placed if you are a new driver having a regular license for less than one year.",
        image: "img/question88.jpg",
        answer: "T",
        explanation: "New drivers with less than one year of experience must display the designated mark."
    },
    {
        question: "89. You must not cross at a place where these traffic signs are shown.",
        image: "img/question89.jpg",
        answer: "T",
        explanation: "Crossing is prohibited where these signs are present."
    },
    {
        question: "90. When you catch up with a route bus which stopped downhill a bus station, you must wait until the bus starts forward.",
        image: "img/question90.jpg",
        answer: "T",
        explanation: "You must slow down when passing a stopped school bus to ensure the safety of children."
    },
    // Page 10
    {
        question: "91. The traffic sign as shown in the figure designates a road that is closed to motorized bicycles and non-motorized conveyances as well as automobiles.",
        image: "img/question91.jpg",
        answer: "T",
        explanation: "The sign indicates that the road is closed to motorized bicycles, non-motorized conveyances, and automobiles."
    },
    {
        question: "92. Stopping is prohibited where the marking shown.",
        image: "img/question92.jpg",
        answer: "F",
        explanation: "The marking indicates that stopping is prohibited."
    },
    {
        question: "93. Using a mobile phone or looking at the screen of a navigation system does not affect a driver’s attention, and may not result in overlooking possible danger or an accident.",
        image: "img/question93.jpg",
        answer: "F",
        explanation: "Using a mobile phone or looking at a navigation system screen distracts the driver and can result in overlooking dangers or causing accidents."
    },
    {
        question: "94. Vehicles are prohibited from crossing the road and to turn left for enter or exit a roadside facility.",
        image: "img/question94.jpg",
        answer: "F",
        explanation: "The sign prohibits vehicles from crossing the road and turning left to enter or exit a roadside facility."
    },
    {
        question: "95. You must have attached a learner’s permit at the rear side of the regular passenger vehicle you practice driving with a beginner’s mark on public road.",
        image: "img/question95.jpg",
        answer: "F",
        explanation: "A learner’s permit and beginner’s mark must be displayed on the vehicle during practice driving on public roads."
    },
    {
        question: "96. For cars equipped with airbag system does not need to use seatbelts.",
        image: "img/question96.jpg",
        answer: "F",
        explanation: "Seatbelts must still be used in cars equipped with airbags for maximum safety."
    },
    {
        question: "97. It is advisable for driver to sound the horn as much as possible at the intersection where visibility is poor.",
        image: "img/question97.jpg",
        answer: "F",
        explanation: "Sounding the horn excessively is not advisable; it should be used only when necessary to avoid danger."
    },
    {
        question: "98. When a truck is stopped just before an uncontrolled pedestrian and bicycle crossing, vehicles may pass the truck without slowing down.",
        image: "img/question98.jpg",
        answer: "F",
        explanation: "Vehicles must slow down and proceed with caution when passing a stopped truck at a pedestrian and bicycle crossing."
    },
    {
        question: "99. When both cars approach the intersection where the width of each road is the same, the car A must not obstruct the path of car B.",
        image: "img/question99.jpg",
        answer: "F",
        explanation: "At intersections with equal road widths, vehicles must yield appropriately to avoid obstruction."
    },
    {
        question: "100. It is permitted to display goods for sale on the sidewalk where they are separated from roadways sidewalks.",
        image: "img/question100.jpg",
        answer: "F",
        explanation: "Displaying goods for sale on the sidewalk is generally not permitted as it can obstruct pedestrian movement."
    },
    {
        question: "101. A hand signal by a driver as shown in the figure indicates that the vehicle will slow down or stop.",
        image: "img/question101.jpg",
        answer: "F",
        explanation: "The hand signal indicates that the vehicle will slow down or stop."
    },
    {
        question: "102. A vehicle facing this traffic light must watch for traffic, but does not need to stop.",
        image: "img/question102.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "103. A pavement marking as shown in the figure indicates the location where vehicles must not stop or park.",
        image: "img/question103.jpg",
        answer: "T",
        explanation: "The pavement marking indicates a no stopping or parking zone."
    },
    {
        question: "104. You must stop at the stopping line or behind the near side of the intersection.",
        image: "img/question104.jpg",
        answer: "T",
        explanation: "Vehicles must stop at the stopping line or just behind the near side of the intersection."
    },
    {
        question: "105. A person who has a license for a moped can ride a moped and a light-duty special vehicle.",
        image: "img/question105.jpg",
        answer: "F",
        explanation: "A moped license allows the holder to ride both a moped and a light-duty special vehicle."
    },
    {
        question: "106. Riders must ride two-wheeled vehicles with correct posture, otherwise braking could throw the rider off balance and forward.",
        image: "img/question106.jpg",
        answer: "T",
        explanation: "Correct posture is essential for maintaining balance during braking on a two-wheeled vehicle."
    },
    {
        question: "107. You must keep a safe distance or slow down when you pass near a bicycle and pedestrian.",
        image: "img/question107.jpg",
        answer: "T",
        explanation: "Maintaining a safe distance or slowing down is essential for the safety of pedestrians and cyclists."
    },
    {
        question: "108. You can turn left at an intersection with this sign regardless of the traffic light.",
        image: "img/question108.jpg",
        answer: "F",
        explanation: "Traffic lights take precedence over turn signs unless otherwise indicated."
    },
    {
        question: "109. You must attach a learner’s permit at the rear of the regular vehicles when you practice driving with a beginner’s mark on a public road.",
        image: "img/question109.jpg",
        answer: "F",
        explanation: "A learner’s permit and a beginner’s mark must be displayed on the vehicle during practice driving on public roads."
    },
    {
        question: "110. The traffic sign indicates that proceeding in the right side of the road for the purpose of overtaking is prohibited.",
        image: "img/question110.jpg",
        answer: "F",
        explanation: "The sign indicates that overtaking on the right side of the road is prohibited."
    },
    // Page 12
    {
        question: "111. A traffic sign as shown in the figure indicates that there is a large intersection ahead.",
        image: "img/question111.jpg",
        answer: "F",
        explanation: "The traffic sign indicates the presence of a large intersection ahead."
    },
    {
        question: "112. In order to make a left turn at an intersection, it is advisable to turn the steering wheel of a vehicle just before the turn left to eliminate the wheelbase differential.",
        image: "img/question112.jpg",
        answer: "F",
        explanation: "It is advisable to be close from before you reached the intersection. Just before the turn"
    },
    {
        question: "113. A regular license holder can ride a regular motorcycle.",
        image: "img/question113.jpg",
        answer: "F",
        explanation: "A regular driver's license does not allow the holder to ride a motorcycle unless it specifically includes a motorcycle endorsement."
    },
    {
        question: "114. Vehicles are prohibited from stopping or parking.",
        image: "img/question114.jpg",
        answer: "T",
        explanation: "The sign indicates that stopping or parking is prohibited."
    },
    {
        question: "115. It is not necessary to consider your footwear too much because they have nothing to do with driving a vehicle.",
        image: "img/question115.jpg",
        answer: "F",
        explanation: "Footwear is important for safe driving as inappropriate shoes can hinder proper control of the vehicle."
    },
    {
        question: "116. When an emergency vehicle is approaching from behind at an intersection, vehicles must stop immediately where they are.",
        image: "img/question116.jpg",
        answer: "F",
        explanation: "Vehicles must stop immediately to give way to an approaching emergency vehicle at an intersection."
    },
    {
        question: "117. A pavement as shown in the figure designates the end of the maximum speed limit of 50 K.M per hour.",
        image: "img/question117.jpg",
        answer: "T",
        explanation: "The pavement marking indicates the maximum speed limit, not the end of it."
    },
    {
        question: "118. Vehicles are prohibited from crossing the road except for vehicles turning left to enter or exit a roadside facility.",
        image: "img/question118.jpg",
        answer: "F",
        explanation: "Not permitted to cross, but you can turn left to enter or exit. Left (if same question and only change the one word prohibited in the place of permitted then answer will be True)"
    },
    {
        question: "119. It is advisable for a driver to sound the horn as much as possible at the intersection where the visibility is poor.",
        image: "img/question119.jpg",
        answer: "F",
        explanation: "Sounding the horn excessively is not advisable; it should be used only when necessary to avoid danger."
    },
    {
        question: "120. When you are learning to drive, you must carry a permit of learner license is necessary.",
        image: "img/question120.jpg",
        answer: "T",
        explanation: "You must carry your learner's permit while practicing driving."
    },
    // Page 13
    {
        question: "121. Towing motor vehicle must travel in the lane indicated by the designation sign.",
        image: "img/question121.jpg",
        answer: "F",
        explanation: "Towing vehicles must adhere to designated lanes as indicated by signs."
    },
    {
        question: "122. Except in emergency, vehicle may stop and enter in areas designated by pavement making in front of police and fire station because the pavement marking only apply in an emergency.",
        image: "img/question122.jpg",
        answer: "F",
        explanation: "The pavement markings apply at all times and vehicles should not stop in these areas except in emergencies."
    },
    {
        question: "123. When in front of an obstacle, you must stop or decelerate and give way to the oncoming traffic.",
        image: "img/question123.jpg",
        answer: "T",
        explanation: "You must stop or slow down and yield to oncoming traffic when there is an obstacle ahead."
    },
    {
        question: "124. The car in this figure can change lanes to turn right at the intersection.",
        image: "img/question124.jpg",
        answer: "F",
        explanation: "The car shown is not permitted to change lanes to turn right at the intersection."
    },
    {
        question: "125. Vehicles in lane A must not change to lane B.",
        image: "img/question125.jpg",
        answer: "T",
        explanation: "Vehicles in lane A are prohibited from changing to lane B."
    },
    {
        question: "126. When you face a signal changed to yellow and if you cannot stop safely, you can proceed through an intersection.",
        image: "img/question126.jpg",
        answer: "T",
        explanation: "If you cannot stop safely at a yellow signal, you may proceed through the intersection."
    },
    {
        question: "127. When you catch up with a route bus which has stopped on a downhill bus station behind the bus until it starts to move forward.",
        image: "img/question127.jpg",
        answer: "T",
        explanation: "You must wait behind a stopped route bus at a bus station until it starts moving forward."
    },
    {
        question: "128. Vehicles cannot proceed except in the direction left and right turns.",
        image: "img/question128.jpg",
        answer: "T",
        explanation: "The sign indicates that vehicles can only make left or right turns."
    },
    {
        question: "129. The traffic signs indicate pedestrian crossing nearby.",
        image: "img/question129.jpg",
        answer: "T",
        explanation: "The sign indicates that there is a pedestrian crossing nearby."
    },
    {
        question: "130. Vehicles are prohibited from stopping or parking.",
        image: "img/question130.jpg",
        answer: "T",
        explanation: "The sign indicates that stopping or parking is prohibited."
    },
    {
        question: "131. When you catch up with a route bus which has stopped at a bus station you must wait behind the bus until it starts to move forward.",
        image: "img/question131.jpg",
        answer: "F",
        explanation: "No need to wait at bus stop."
    },
    {
        question: "132. When a person is traveling in a wheelchair or carrying a white or yellow cane, drivers must slow down or stop.",
        image: "img/question132.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "133. This hand signal by the police officer in this picture means a red light for the traffic indicated with an arrow.",
        image: "img/question133.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "134. Placed at the exit of a one-way street and vehicles are prohibited to enter.",
        image: "img/question134.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "135. For cars equipped with airbag system does not need to use the seatbelts.",
        image: "img/question135.jpg",
        answer: "F",
        explanation: "You need to use the seatbelt."
    },
    {
        question: "136. On the road in this picture, vehicle A cannot enter the right side of the road to overtake a vehicle ahead.",
        image: "img/question136.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "137. When the cars approach the intersection where the width of each road is the same, the car A must not obstruct the car B.",
        image: "img/question137.jpg",
        answer: "F",
        explanation: "Car B must not obstruct."
    },
    {
        question: "138. If an emergency vehicle approaches, you must change lanes without paying attention and keep driving without giving way to the emergency vehicles.",
        image: "img/question138.jpg",
        answer: "F",
        explanation: "This is very dangerous to change lane without paying attention."
    },
    {
        question: "139. When towing a broken car with gross weight of 750kg or less using a regular vehicle a towing license and in addition to an appropriate license for towing automobiles, is required.",
        image: "img/question139.jpg",
        answer: "F",
        explanation: "Towing for less than 750 kg towing license not required."
    },
    {
        question: "140. Vehicles and streetcars facing as shown in the figure may enter the intersection by slowing down while watching other traffic.",
        image: "img/question140.jpg",
        answer: "F",
        explanation: "Must stop."
    },
    // Page 15
    {
        question: "141. Vehicles are prohibited from making a U-Turn.",
        image: "img/question141.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "142. It is not necessary to ensure the safety of opening and closing the door when passengers get in or out of the vehicle.",
        image: "img/question142.jpg",
        answer: "F",
        explanation: "That is drivers’ responsibility."
    },
    {
        question: "143. You must not overtake or pass other cars in area within 30 meters from the crosswalk or bicycle crossing lane.",
        image: "img/question143.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "144. The user or driver of the vehicle with a determination of an illegally parked and left vehicle sticker attached or the person who has responsibility to maintain the vehicle cannot remove the sticker.",
        image: "img/question144.jpg",
        answer: "F",
        explanation: "Can remove who is responsible."
    },
    {
        question: "145. A good comfortable driving posture is posture where your knees are fully stretched and your foot is placed on the clutch pedal.",
        image: "img/question145.jpg",
        answer: "F",
        explanation: "Knees and elbows are to be slightly bent."
    },
    {
        question: "146. A vehicle can travel on the road with this sign.",
        image: "img/question146.jpg",
        answer: "F",
        explanation: "Cannot travel."
    },
    {
        question: "147. Seat belts can save lives whenever there is a traffic accident and they can reduce the driver’s fatigue by helping to be in proper driving posture.",
        image: "img/question147.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "148. This hand signal by the police officer in this picture means a red light for the traffic indicated by an arrow.",
        image: "img/question148.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "149. When you practice driving with a learner's permit, you must be accompanied by an experienced driver who has possessed a category 1 license for over three years or a category 2 license.",
        image: "img/question149.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "150. Vehicle facing this traffic light must stop at the stopping area and watch out for turning left vehicles.",
        image: "img/question150.jpg",
        answer: "F",
        explanation: "No need to stop when arrow is green to turn right."
    },
    // Page 16
    {
        question: "151. Drivers must carefully proceed along the center line when they make a left turn because it does not cause the near pedestrian and bicycle to get run over at the intersections.",
        image: "img/question151.jpg",
        answer: "F",
        explanation: "Drivers must drive close to the left edge as possible."
    },
    {
        question: "152. This sign shows 'Narrow Road'.",
        image: "img/question152.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "153. When you see the flashing red light at an intersection, you must always stop.",
        image: "img/question153.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "154. On the road with this sign, parking and stopping is prohibited from 8 to 20.",
        image: "img/question154.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "155. If you tow a vehicle with a total weight of 750kg or less a towing license is not required.",
        image: "img/question155.jpg",
        answer: "T",
        explanation: "Towing for less than 750 kg towing license not required."
    },
    {
        question: "156. The car shown in this picture is parked illegally.",
        image: "img/question156.jpg",
        answer: "F",
        explanation: "Not illegal, No parking start from that sign."
    },
    {
        question: "157. You should not drive if you have taken drowsiness-inducing medications.",
        image: "img/question157.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "158. A learner's permit holder must practice driving by placing this sign on the designated places of the front and rear of the vehicles.",
        image: "img/question158.jpg",
        answer: "T",
        explanation: "Same as question."
    },
    {
        question: "159. When an emergency vehicle is approaching you should stop even if you were at the intersection.",
        image: "img/question159.jpg",
        answer: "F",
        explanation: "Cannot stop in intersection."
    },
    {
        question: "160. This road sign means 'right of way'.",
        image: "img/question160.jpg",
        answer: "T",
        explanation: "Same as question."
    },
        // Page 17
        {
            question: "161. You may sound your horn if necessary to avoid danger.",
            image: "img/question161.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "162. At a road with this marketing sign in the figure, the car may proceed on lane B and can change its course to lane A.",
            image: "img/question162.jpg",
            answer: "F",
            explanation: "Cannot cross the yellow line."
        },
        {
            question: "163. Braking Distance is the distance traveled by the vehicle after the driver has reacted to danger and hit brake plus the distance required for the vehicle to come to halt.",
            image: "img/question163.jpg",
            answer: "F",
            explanation: "This is called Stopping Distance."
        },
        {
            question: "164. The car A should give way to car B at the intersection where its road width is the same.",
            image: "img/question164.jpg",
            answer: "F",
            explanation: "Car B should give way."
        },
        {
            question: "165. If you need to start in reverse it is better to ask a passenger the vehicle to check for traffic when the rear visibility is poor of when backing out from a narrow road into a wider one.",
            image: "img/question165.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "166. On the lane with this sign, regular passenger cars cannot travel alone the lane except for making a left turn or avoiding road construction.",
            image: "img/question166.jpg",
            answer: "F",
            explanation: "Can proceed in that lane."
        },
        {
            question: "167. When you drive the road with no sidewalk or side strip you cannot enter the shoulder (the area which 0.5 meter away from the edge of the road).",
            image: "img/question167.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "168. In this picture the hand signal seen from the rear, when the driver extends the arm horizontally, it means that the car is about to stop.",
            image: "img/question168.jpg",
            answer: "F",
            explanation: "This signal is about to right turn."
        },
        {
            question: "169. When you pass a person with a white or yellow cane, or a physically challenged person is a wheelchair, you need to stop or slow down so that these people can pass safely.",
            image: "img/question169.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "170. All vehicles cannot make right or left turn.",
            image: "img/question170.jpg",
            answer: "F",
            explanation: "Can turn left and right."
        },
        // Page 18
        {
            question: "171. When there is nobody getting on or off the streetcar, tram at the streetcar stop, you may proceed slowly if you are at the distance of 1.5 meter or more from streetcar, tram or if there is a safety zone.",
            image: "img/question171.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "172. This marking means that speed limit of 50km/h begins here.",
            image: "img/question172.jpg",
            answer: "F",
            explanation: "This marking means the end of traffic regulations."
        },
        {
            question: "173. When you pass the pedestrian walking inside the side strip, you do not need to keep safe distance from them or slow down.",
            image: "img/question173.jpg",
            answer: "F",
            explanation: "You must have to keep a safe distance."
        },
        {
            question: "174. The car in lane A can change its lane to the lane B to go straight.",
            image: "img/question174.jpg",
            answer: "F",
            explanation: "Cannot change in that position."
        },
        {
            question: "175. Vehicle must stop when the cross the sidewalk order to enter the parking lot even if there is no pedestrian.",
            image: "img/question175.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "176. You must not cross or make a U-Turn at a place where these traffic sign are shown.",
            image: "img/question176.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "177. You must not overtake or pass other cars in area within 30 meters from the crosswalk or bicycle crossing lane.",
            image: "img/question177.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "178. Vehicle facing this traffic light must always stop and watch out for traffic.",
            image: "img/question178.jpg",
            answer: "F",
            explanation: "No need to stop."
        },
        {
            question: "179. Because my car entered the intersection first I turned right before the oncoming vehicle.",
            image: "img/question179.jpg",
            answer: "F",
            explanation: "The oncoming vehicle has right of way."
        },
        {
            question: "180. This traffic sign and marking have same meaning.",
            image: "img/question180.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        // Page 19
        {
            question: "181. You can proceed when the pedestrian who is crossing on the road notices you and stop.",
            image: "img/question181.jpg",
            answer: "F",
            explanation: "Never obstruct for crossing."
        },
        {
            question: "182. You cannot enter the right side of the road as shown in the picture to overtake other car.",
            image: "img/question182.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "183. You cannot stop your car inside the no stopping zone in front of the police station or the fire station even when there are not emergency vehicle coming out.",
            image: "img/question183.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "184. This road marking means that the speed limit of this road is 30km/hr.",
            image: "img/question184.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "185. I operated the navigation system and looked for a route while driving because I got lost.",
            image: "img/question185.jpg",
            answer: "F",
            explanation: "While driving doesn’t operate."
        },
        {
            question: "186. The car B in the figure must proceed slowly when it passes the intersection with poor visibility due to obstacles.",
            image: "img/question186.jpg",
            answer: "F",
            explanation: "Car B has right of way so can proceed without slowing down."
        },
        {
            question: "187. If you can check for traffic, you can proceed without slowing down, when you pass the school bus stopping on the road.",
            image: "img/question187.jpg",
            answer: "F",
            explanation: "You must slow."
        },
        {
            question: "188. You do not need to slow down if you can look left and right completely when you pass the road with this traffic sign.",
            image: "img/question188.jpg",
            answer: "F",
            explanation: "You must slow down."
        },
        {
            question: "189. When closing the door after getting in the vehicle, it is better to apply forces to shut it completely without stopping just before the door latches.",
            image: "img/question189.jpg",
            answer: "F",
            explanation: "It is better to stop once then close."
        },
        {
            question: "190. On the road with this traffic sign you can overtake other cars if there are no oncoming vehicles and if you can confirm safety.",
            image: "img/question190.jpg",
            answer: "F",
            explanation: "You cannot overtake either confirm safety or not."
        },
        {
            question: "191. On a slope a vehicle travelling uphill should give way to a vehicle travelling downhill.",
            image: "img/question191.jpg",
            answer: "F",
            explanation: "Travelling to downhill should give way."
        },
        {
            question: "192. This road marking indicates 'No Parking'.",
            image: "img/question192.jpg",
            answer: "F",
            explanation: "This marking means no parking or stopping."
        },
        {
            question: "193. When you park your car, you should shift the gear into the 'P' (parking) position regardless of the road condition.",
            image: "img/question193.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "194. At an intersection with this traffic sign, you can proceed by confirming safety without making a stop.",
            image: "img/question194.jpg",
            answer: "F",
            explanation: "You have to stop completely."
        },
        {
            question: "195. On a one-way road, vehicles can drive from the center to the right side of the road.",
            image: "img/question195.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "196. The car B does not need to give way to car A.",
            image: "img/question196.jpg",
            answer: "F",
            explanation: "Car B must not obstruct."
        },
        {
            question: "197. For a learner with a learner's permit to practice driving, a driver needs to be in the passenger seat; there are no requirements to be an experienced driver.",
            image: "img/question197.jpg",
            answer: "F",
            explanation: "Also need an experienced driver."
        },
        {
            question: "198. On the one-way road a vehicle can enter right when crossing the side of the road.",
            image: "img/question198.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "199. The user or driver of the vehicle with a determination of an illegally parked left vehicle sticker attached or a person who has responsibility to maintain the vehicle can remove the sticker.",
            image: "img/question199.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "200. On the road with this sign, you can overtake other cars, if there are no oncoming vehicles and can confirm safety.",
            image: "img/question200.jpg",
            answer: "F",
            explanation: "This is no overtaking sign."
        },
        // Page 21
        {
            question: "201. You cannot enter the right side of the road as in the picture to overtake others.",
            image: "img/question201.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "202. The holder of a learner's permit can be identified with the copy of the original permit so if you carry the copy while practicing driving it is not necessary to carry the original permit.",
            image: "img/question202.jpg",
            answer: "F",
            explanation: "You must carry the original."
        },
        {
            question: "203. The car travelling on lane A can change its course to lane B.",
            image: "img/question203.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "204. When you drive across the sidewalk to enter the parking lot, you do not need to stop before the sidewalk if you can confirm safety.",
            image: "img/question204.jpg",
            answer: "F",
            explanation: "You must stop when you cross the sidewalk or side strip even if you can confirm safety."
        },
        {
            question: "205. The car B in the figure must proceed slowly while it passes the intersection with poor visibility due to obstacles.",
            image: "img/question205.jpg",
            answer: "F",
            explanation: "Car B does not need to slow down."
        },
        {
            question: "206. This hand signal by the police officer in this picture means a red light for the traffic indicated with an arrow.",
            image: "img/question206.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "207. You were talking on your cellphone held in your hand because you recalled something to deal with urgently while at a traffic light. When the traffic light turned green, you started driving the vehicle while continuing talking on the phone.",
            image: "img/question207.jpg",
            answer: "F",
            explanation: "You cannot talk on a cellphone while driving."
        },
        {
            question: "208. You may sound the horn when you pass an intersection, corner of the road, or top of a hill where its visibility is poor in the sounding zone.",
            image: "img/question208.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "209. Vehicles and mopeds can pass through roads regulated by this traffic sign.",
            image: "img/question209.jpg",
            answer: "F",
            explanation: "Closed to vehicles shown."
        },
        {
            question: "210. You may proceed slowly before you pass the vehicle if there is a car stopping at or before a crosswalk.",
            image: "img/question210.jpg",
            answer: "F",
            explanation: "You need to stop."
        },
        // Page 22
        {
            question: "211. The car in this figure cannot change lane or go straight at the intersection.",
            image: "img/question211.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "212. When you approach the section of the road indicated by this traffic sign, you must gradually move toward the right side while exercising caution with the vehicles behind you.",
            image: "img/question212.jpg",
            answer: "T",
            explanation: "Narrow road, same as question."
        },
        {
            question: "213. This is a picture of a hand signal seen from the rear, when the driver shows his arm diagonally, it means that the car is slowing down or making a complete stop.",
            image: "img/question213.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "214. When you catch up with a route bus which has stopped at a bus station you must wait behind the bus until it starts to move forward.",
            image: "img/question214.jpg",
            answer: "F",
            explanation: "You do not have to wait."
        },
        {
            question: "215. You can overtake other cars, mopeds at a steep downhill.",
            image: "img/question215.jpg",
            answer: "F",
            explanation: "Cannot overtake at steep downhill."
        },
        {
            question: "216. A learner's permit holder must practice driving by placing this sign on the designated places of the front and rear of the vehicle.",
            image: "img/question216.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "217. Vehicles can proceed in the direction indicated by the green arrow; when the green arrow indicated to the right, it is possible to turn right or make a U-Turn.",
            image: "img/question217.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "218. The pavement markings shown on the left, designate that there is either a pedestrian crossing or a bicycle crossing ahead.",
            image: "img/question218.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "219. Even when proceeding on a road where the vehicular lanes are designated by a yellow line, they cross the line and change lanes so as to execute left or right turn.",
            image: "img/question219.jpg",
            answer: "F",
            explanation: "You have to change before starting the yellow line."
        },
        {
            question: "220. You cannot enter the right side of the road in order to overtake where there is this sign.",
            image: "img/question220.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "221. You should adjust the driver's seat of the four-wheeled vehicle so that your knees are fully stretched out when you step on the clutch.",
            image: "img/question221.jpg",
            answer: "F",
            explanation: "Knees should be slightly bent for better control and comfort."
        },
        {
            question: "222. Using a mobile phone or looking at the screen of a navigation system while driving does not affect a driver's attention and may not result in overlooking possible danger or an accident.",
            image: "img/question222.jpg",
            answer: "F",
            explanation: "Using a mobile phone or looking at a navigation system screen distracts the driver and can result in overlooking dangers or causing accidents."
        },
        {
            question: "223. The traffic sign designates that proceeding on the right side of the road, for the purpose of overtaking.",
            image: "img/question223.jpg",
            answer: "F",
            explanation: "The sign indicates that the road is closed to all vehicles."
        },
        {
            question: "224. Because my car entered the intersection first, I turned right before the oncoming vehicle.",
            image: "img/question224.jpg",
            answer: "F",
            explanation: "The oncoming vehicle has the right of way."
        },
        {
            question: "225. When passing a school bus or kindergarten bus, which has stopped to drop the children off, you must always stop behind the bus and confirm safety.",
            image: "img/question225.jpg",
            answer: "F",
            explanation: "You must slow down but stopping is not necessary."
        },
        {
            question: "226. The car shown in this picture is parked illegally.",
            image: "img/question226.jpg",
            answer: "T",
            explanation: "The car is parked in a manner that violates parking regulations."
        },
        {
            question: "227. Driver's license is classified into different categories. Namely first class, second class, and moped.",
            image: "img/question227.jpg",
            answer: "F",
            explanation: "Driver's license is classified into first class, second class, and learner's permit."
        },
        {
            question: "228. The sign and the marking indicate that the lane is for buses only. So other vehicles (except for mopeds, light-duty special vehicles, and light-weight vehicles) are prohibited to travel the lane.",
            image: "img/question228.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "229. All vehicles cannot make a right or left turn.",
            image: "img/question229.jpg",
            answer: "F",
            explanation: "Vehicles can turn left and right."
        },
        {
            question: "230. The term 'slow down' refers to reducing speed at which the vehicle can come to an immediate stop at any time that usually means driving at a speed of less than 10km/h.",
            image: "img/question230.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "231. A traffic sign shown in the figure indicates closed to pedestrians.",
            image: "img/question231.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "232. You must fulfill the requirement for driving as stated in your driver's license.",
            image: "img/question232.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "233. Stopping and parking here is prohibited.",
            image: "img/question233.jpg",
            answer: "F",
            explanation: "Same as question."
        },
        {
            question: "234. To enter the gas station located on the right side of the road, you made a right turn from the far left side of the road and crossed the halfway line to enter the establishment as indicated by the arrow.",
            image: "img/question234.jpg",
            answer: "F",
            explanation: "You have to come close to the center line for turning right."
        },
        {
            question: "235. Pedestrians, vehicles, and streetcars/trams may proceed carefully by paying attention to other traffic.",
            image: "img/question235.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "236. On the road with this sign parking and stopping is prohibited from 8 to 20.",
            image: "img/question236.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "237. When you drive a car equipped with an air bag system, you do not need to fasten your seatbelt.",
            image: "img/question237.jpg",
            answer: "F",
            explanation: "You have to use a seatbelt even with an airbag system."
        },
        {
            question: "238. A traffic sign as shown in the figure indicated that there is a large intersection and you can go ahead.",
            image: "img/question238.jpg",
            answer: "F",
            explanation: "This sign means 'right of way'."
        },
        {
            question: "239. You may stop your car inside the 'no stopping zone' in front of the police or fire station if there is no emergency vehicle approaching from behind.",
            image: "img/question239.jpg",
            answer: "F",
            explanation: "You cannot stop in a 'no stopping zone'."
        },
        {
            question: "240. On the rainy day, to stop safely on a steel plate at a roadwork site, it is better to apply breaks suddenly.",
            image: "img/question240.jpg",
            answer: "F",
            explanation: "Apply brakes softly."
        },
        {
            question: "241. Indicates the end of the section or zone where the traffic regulation shown by the main sign ends.",
            image: "img/question241.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "242. When you go down the slope in an automatic transmission vehicle, change gears to L (or 1).",
            image: "img/question242.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "243. When a police officer is controlling traffic by holding his/her arms straight up (vertically) at an intersection, this hand signal has the same meaning as the yellow light for the traffic proceeding parallel to the stance of the police.",
            image: "img/question243.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "244. A regular license holder can ride a regular motorcycle.",
            image: "img/question244.jpg",
            answer: "F",
            explanation: "A regular driver's license does not allow the holder to ride a motorcycle unless it specifically includes a motorcycle endorsement."
        },
        {
            question: "245. This sign means 'closed to pedestrians'.",
            image: "img/question245.jpg",
            answer: "F",
            explanation: "Same as question."
        },
        {
            question: "246. Stopping distance is the distance traveled by the vehicle after the driver has reacted to a danger and hit the brake plus the distance required for the vehicle to come to a halt.",
            image: "img/question246.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "247. If the hand signal of a police officer who is directing traffic contradicts a traffic light, the traffic light takes priority.",
            image: "img/question247.jpg",
            answer: "F",
            explanation: "We must follow the police officers not the traffic light."
        },
        {
            question: "248. When you pass the railroad crossing, you should be careful of the traffic ahead or from the opposite direction so that you may not be stuck on the crossing.",
            image: "img/question248.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "249. When you make a left turn to leave the road, you should move along the left side as possible and slow down.",
            image: "img/question249.jpg",
            answer: "T",
            explanation: "Same as question."
        },
        {
            question: "250. When you drive the car with automatic transmission, it is important for you to confirm the position of the brake pedal and the accelerator pedal by looking at them to ensure you will not misstep on them before starting the engine.",
            image: "img/question250.jpg",
            answer: "T",
            explanation: "Same as question."
        }
];
