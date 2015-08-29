(function() {
    //ToDo : 改成從restful 拿data

    var userState = Profile.getUserJobsState(),
		currentTaskId ;		
	//End ToDo 

	var para=getPara.get();
	var currentJobId = Profile.getCurrentJobId();
	
	//Test set jobId
	//currentJobId = '1';
			
    DataLoader.loadTasks('tasks',userState,currentJobId);
    DataLoader.showBtnToTiger(userState);

    //dialog effect setting
    $("#dialog").dialog({
        autoOpen: false,
        hide: {
            effect: "explode",
            duration: 1000
        }
    });


    $(document).on("click", "#tasks li", function() {
        var taskId = $(this).data('id'),
            task = training_datas.getData(taskId);
			currentTaskId = taskId;        	

        var image = task.imagePath;
        $('#dialog').dialog('option', 'title', task.title);
        $("#dialog").find('p').html(task.content);
        $('#dialog').find('img').attr('src', image);
        $("#dialog").dialog("open");
    });


    $(document).on("click","#EnterBattle",function(){
		//test Job Id	    
		
		var url = "battlepage.html?monster=big&taskId=" + currentTaskId + "&jobId=" + currentJobId;
        window.location.href = url;
    });

})();
