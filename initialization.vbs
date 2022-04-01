Dim objuft

Set objuft=CreateObject("Quicktest.Application")
objuft.visible=True
objuft.launch
objuft.open("C:\capgemini\DataDrivenFramework\Driver\Driver")
objuft.Test.Run
objuft.Test.close
objuft.quit
Set objuft=Nothing
