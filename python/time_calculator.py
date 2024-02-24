def add_time(start, duration, optional=False):
	
	startTime = start
	durationTime = duration
	startingDayOfTheWeek = optional
	new_time = ""
	
	clockFormat = ["AM", "PM"]
	dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	
	splitStartTime = startTime.split()
	oneStartTime = splitStartTime[0].split(":")
	hourStartTime = int(oneStartTime[0])
	minuteStartTime = int(oneStartTime[1])
	clockFormatStartTime = splitStartTime[1]
	
	splitDurationTime = durationTime.split()
	oneDurationTime = splitDurationTime[0].split(":")
	hourDurationTime = int(oneDurationTime[0])
	minuteDurationTime = int(oneDurationTime[1])
	
	if clockFormatStartTime == "AM":
		hourStartTime
	elif clockFormatStartTime == "PM":
		hourStartTime += 12
	
	resultHour = hourStartTime + hourDurationTime
	resultMinute = minuteStartTime + minuteDurationTime
	
	if resultMinute < 60:
		resultHour
	else:
		resultHour += 1
		m = resultMinute
		resultMinute -= 60
	
	sResultMinute = ""
	
	if resultMinute < 10:
		sResultMinute += "0" + str(resultMinute)
	else:
		sResultMinute = str(resultMinute)
	
	resultDay = resultHour // 24
	resultDayHour = resultHour % 24
	
	if startingDayOfTheWeek != False:
		startingDayOfTheWeek = startingDayOfTheWeek.lower()
		i = 0
		thatDay = ""
		for x in dayOfTheWeek:
			if x.lower() == startingDayOfTheWeek.lower():
				i += 1
				thatDay += dayOfTheWeek[i + resultDay]
	else:
		startingDayOfTheWeek = False
		
	if resultDay > 1:
		if startingDayOfTheWeek != False:
			if clockFormatStartTime == "AM":
				new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[1]}, {thatDay.capitalize()} ({resultDay} days later)"
			elif clockFormatStartTime == "PM":
				new_time = f"{resultDayHour + 12}:{sResultMinute} {clockFormat[0]}, {thatDay.capitalize()} ({resultDay} days later)"
				
		elif startingDayOfTheWeek == False:
			if clockFormatStartTime == "AM":
				new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[1]} ({resultDay} days later)"
			elif clockFormatStartTime == "PM":
				new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[0]} ({resultDay} days later)"

	elif resultDay == 1:
		
		if clockFormatStartTime == "AM":
			new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[1]}{startingDayOfTheWeek.capitalize()} (next day)"
		else:
			new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[0]} (next day)"
	
	else:
		if resultDay == 0:
			if resultHour > 12:
				resultHour -= 12
				clockFormatStartTime = clockFormat[1]
				if startingDayOfTheWeek != False:
					new_time = f"{resultHour}:{sResultMinute} {clockFormatStartTime}, {startingDayOfTheWeek.capitalize()}"
				else:
					new_time = f"{resultHour}:{sResultMinute} {clockFormatStartTime}"
			if resultHour == 12:
				if m > 60:
					if clockFormatStartTime == "AM":
						new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[1]}"
					else:
						new_time = f"{resultDayHour}:{sResultMinute} {clockFormat[0]}{startingDayOfTheWeek.capitalize()}"
		else:
			new_time = f"{resultHour}:{sResultMinute} {clockFormatStartTime} {startingDayOfTheWeek.capitalize()}"
			
	return new_time

print(add_time("3:00 PM", "3:10"))
# Returns: 6:10 PM

print(add_time("11:30 AM", "2:32", "Monday"))
# Returns: 2:02 PM, Monday

print(add_time("11:43 AM", "00:20"))
# Returns: 12:03 PM

print(add_time("10:10 PM", "3:30"))
# Returns: 1:40 AM (next day)

print(add_time("11:43 PM", "24:20", "tueSday"))
# Returns: 12:03 AM, Thursday (2 days later)

print(add_time("6:30 PM", "205:12"))
# Returns: 7:42 AM (9 days later)
