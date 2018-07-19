({
	fetchAccounts : function(component, event, helper) {
		var action = component.get("c.getAccounts");
       var maxlist = document.getElementById("select-01").value;;
        action.setParams({
            max: maxlist 
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var accountlist = response.getReturnValue();
            if(state === 'SUCCESS'){
                var accountlist = response.getReturnValue();
                component.set("v.accountList", accountlist);
            }
            else{
                alert('Error in getting data');
            }
        });
        $A.enqueueAction(action);                                        
	},
    
})