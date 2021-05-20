({
    doInit: function (cmp) {
        var action = cmp.get("c.getUserCurrentEmail");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.Email", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
