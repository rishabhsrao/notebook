$(document).ready(function(){$("#noJavascriptError").addClass("hide");$(window).error(function(b,a,c){debug.error(b,a,c)});debug.group("Notebook");debug.info("Starting Notebook...");debug.group("Main Application object");debug.info("Creating main Notebook object...");var a=new Notebook;debug.info("Main Notebook object created successfully.",a);debug.groupEnd();debug.info("Applying Knockout bindings",a);ko.applyBindings(a);debug.info("Initializing jQuery.validate");$("#createNewNoteForm").validate({rules:{noteTitle:{required:!1},
noteContent:{required:!0}},messages:{noteTitle:"",noteContent:""},highlight:function(a){$(a).parent().parent().addClass("error")},unhighlight:function(a){$(a).parent().parent().removeClass("error")}});$("a, button, input, textarea, img").tooltip({animation:!0});$("#pageContainer").fadeIn(1500);debug.groupEnd()});
