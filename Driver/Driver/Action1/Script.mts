'write this below 6 line if we want to get data directly from excel sheets
'and make changes Module instead of Action1, TestCase instead of Action2, TestStep instead of Action3 in code

'Datatable.AddSheet "Module"
'Datatable.AddSheet "TestCase"
'Datatable.AddSheet "TestStep"
'Datatable.ImportSheet "C:\capgemini\KeywordDrivenFramework\Organizer\Organizer.xlsx",1,"Module"
'Datatable.ImportSheet "C:\capgemini\KeywordDrivenFramework\Organizer\Organizer.xlsx",1,"TestCase"
'Datatable.ImportSheet "C:\capgemini\KeywordDrivenFramework\Organizer\Organizer.xlsx",1,"TestStep"

Services.StartTransaction "tr1"



mrowcount=datatable.GetSheet("Action1").GetRowCount
msgbox mrowcount

For i = 1 To mrowcount Step 1
	
Datatable.SetCurrentRow(i)

Modexe=Datatable("ModuleExe","Action1")

'msgbox Modexe

If Modexe="Y" Then

	Modid=Datatable("ModuleID","Action1")
	msgbox Modid
	
	trowcount=datatable.GetSheet("Action2").GetRowCount
	msgbox trowcount
	For j = 1 To trowcount Step 1
		Datatable.SetCurrentRow(j)
		
	If Modid = Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" Then
	
	testcaseid=Datatable("TestcaseId","Action2")
	
	msgbox testcaseid
	
	   tsrowcount=Datatable.GetSheet("Action3").GetRowCount
	   msgbox tsrowcount
	   
	   For k = 1 To tsrowcount Step 1
	   	
	   	datatable.SetCurrentRow(k)
	   	If testcaseid=Datatable("TestcaseId","Action3") Then
	   	
	   	keyword=Datatable("Keyword","Action3")
	   	msgbox keyword
	   	
	   	Select case (keyword)
	   		
	   	Case "ln"
	   	Call Login("john","hp")
	   	
	   	Case "ca"
	   	Call Closeapp()
	   	
	   	Case "oo"
	   	Call OpenOrder()
	   	
	   	Case "uo"
	   	Call UpdateOrder()
	   	
	   	Case "lnd"
	   	
	   	drowcount=datatable.GetSheet("Action4").GetRowCount
	   	
	   	For l = 1 To drowcount Step 1
	   		
	   		datatable.SetCurrentRow(l)
	   		
	   		Call login(datatable("username","Action4"),datatable("password","Action4"))
	   		Call Closeapp()
	   		
	   	Next
	   	
	   	Case "ood"
	   	
	   	orrowcount=datatable.GetSheet("Action4").GetRowCount
	   	
	   	For m = 1 To orrowcount Step 1
	   		
	   		datatable.SetCurrentRow(m)
	   		Call openorder(datatable("orderno","Action4"))
	   	Next
	   	
	   	
	   	
	   	End  Select


	   	End If
	   	
	   Next
		
		
		
	End If	
		
 @@ hightlight id_;_2622546_;_script infofile_;_ZIP::ssf1.xml_;_
	Next
	
	
End If
	
	
	
Next


 @@ hightlight id_;_1988610320_;_script infofile_;_ZIP::ssf5.xml_;_

Services.EndTransaction "tr1"


 @@ hightlight id_;_1985015088_;_script infofile_;_ZIP::ssf12.xml_;_

