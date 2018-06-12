// Budget Controller
let budgetController = (function() {
    let Expense = function(id,description,value,updatedAt){
        this.id = id;
        this.description = description;
        this.value = value;
        this.lastUpdated = updatedAt;
    };
    
    let Income = function(id,description,value,updatedAt){
        this.id = id;
        this.description = description;
        this.value = value;
        this.lastUpdated = updatedAt;
    };
 
    let data = {
        allRecords: {
            expense:[],
            income:[]
        },
        totals:{
            expense:0,
            income:0
        }

    }

    return {
        addRecord: function(type, des, val){
            let newRecord, newID
            // Create new ID
            if (data.allRecords[type].length > 0 ) {
                newID = data.allRecords[type][data.allRecords[type].length -1].id + 1;
            }else {
                newID = 1;
            }
            
            // Create a new Record base on 'inc' or 'exp' type
            if (type === 'expense') {
                newRecord = new Expense(newID, des, val, Date());
            }else if (type === 'income'){
                newRecord = new Income(newID, des, val, Date());
            }
            // Push it into our data structure 
            data.allRecords[type].push(newRecord);

            // Return the new record
            return newRecord;
        },
        testing: function(){
            console.log(data);
        }
    };

})();


// UI Controller
let uiController = (function() {
    let mainBladeComponents = {
        addRecordType: document.getElementsByClassName('add__type').item(0),
        addRecordDescription:document.getElementsByClassName('add__description').item(0),
        addRecordValue:document.getElementsByClassName('add__value').item(0),
        addRecordBtn:document.getElementsByClassName('add__btn').item(0),
        incomeList:document.getElementsByClassName('income__list').item(0),
        expensesList:document.getElementsByClassName('expenses__list').item(0),
    }

    return {
        getInput: function() {
            return {
                type : mainBladeComponents.addRecordType.value,
                description : mainBladeComponents.addRecordDescription.value,
                value : parseFloat(mainBladeComponents.addRecordValue.value)
            };
        },
        addRecordToList:function(obj,type){
            var html, newHtml,listCotainer;
            // Create HTML string with placeholder text
            if (type === 'income'){
                listCotainer = mainBladeComponents.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if (type === 'expense'){
                listCotainer = mainBladeComponents.expensesList;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
          
            // Replace the placeholder texrt with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            // Insert the HTML into the DOM
            listCotainer.insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields: function(){
            let addRecordFields = new Array(mainBladeComponents.addRecordDescription,mainBladeComponents.addRecordValue);

            addRecordFields.forEach(function(current){
                current.value = "";

            });
            addRecordFields[0].focus();
        },
        getMainBladeComponents: function(){
            return mainBladeComponents;
        }
    }
})();


// Global App Controller
let appController = (function(budgetCtrl,uiCtrl) {
    
    let setUpEventListeners = function(){
        
        let mainBladeComponent = uiController.getMainBladeComponents();
        mainBladeComponent.addRecordBtn.addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    let updateBudget = function() {
        // 1. Calculate the budget
        // 2. Return the budget
        // 3. Display the budget on the UI
    };

    let ctrlAddItem = function(){

        // 1. Get input data
        let input = uiController.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0){
            // 2. Add the item to the budget based on the type. 
            let newRecord = budgetController.addRecord(input.type,input.description,input.value);    
            // 3. Add the item to the UI
            uiController.addRecordToList(newRecord ,input.type)
            
            // 4. Clear fields
            uiController.clearFields();
            
            // 5. Calculate and Update the new budget
            updateBudget();
        }else {
            alert("Invalid description/value fields.")
        }
      
    };

    return {
        init:function(){
            console.log('Application has started at '+Date())
            setUpEventListeners();
        }
    };

})(budgetController,uiController);

appController.init();