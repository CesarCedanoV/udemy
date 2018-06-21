// Budget Controller
let budgetController = (function() {
    let Expenses = function(id,description,value,updatedAt){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
        this.lastUpdated = updatedAt;
    };
    Expenses.prototype.calcPercentage = function(totalIncome){
        if (totalIncome > 0 ){
            this.percentage = Math.round( (this.value / totalIncome) * 100)
        }else {
            this.percentage = -1;
        }
        
    };

    Expenses.prototype.getPercentage = function(){
        return this.percentage;
    };
    
    
    let Incomes = function(id,description,value,updatedAt){
        this.id = id;
        this.description = description;
        this.value = value;
        this.lastUpdated = updatedAt;
    };

    let calculateTotal = function(type){
        let total = 0;
        data.allRecords[type].forEach(function(item) {
            total += item.value;
        });
        data.totals[type] = total;
    };
 
    let data = {
        allRecords: {
            expenses:[],
            incomes:[]
        },
        totals:{
            expenses:0,
            incomes:0
        },
        budget: 0,
        percentage:-1

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
            if (type === 'expenses') {
                newRecord = new Expenses(newID, des, val, Date());
            }else if (type === 'incomes'){
                newRecord = new Incomes(newID, des, val, Date());
            }
            // Push it into our data structure 
            data.allRecords[type].push(newRecord);

            // Return the new record
            return newRecord;
        },
        deleteRecord: function(type,id){
            let ids = data.allRecords[type].map(function(item){
                return item.id;
            });
            let index = ids.indexOf(id);
            if (index !== -1 ){
                data.allRecords[type].splice(index,1);
            }
            
        },
        calculateBudget: function(type){
            // calculate total incomes and expenses
            calculateTotal('incomes');
            calculateTotal('expenses');

            // calculate the budget incomes - expenses
            data.budget = data.totals.incomes - data.totals.expenses;

            // calculate the percentage of incomes that we spent
            if (data.totals.incomes > 0){
                data.percentage = Math.round((data.totals.expenses / data.totals.incomes) * 100)
            }else {
                data.percentage = -1
            }
        },
        calculatePercentages: function(){
            data.allRecords.expenses.forEach(function(record){
                record.calcPercentage(data.totals.incomes);
            });
        },
        getPercentage: function(){
            var allPercentages = data.allRecords.expenses.map(function(record){
                return record.getPercentage();
            });
            return allPercentages;
        },
        getBudget: function(){
            return {
                budget : data.budget,
                totalIncomes: data.totals.incomes,
                totalExpenses: data.totals.expenses,
                percentage: data.percentage,
            }
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
        incomesList:document.getElementsByClassName('incomes__list').item(0),
        expensesList:document.getElementsByClassName('expenses__list').item(0),
        budgetLabel:document.getElementsByClassName('budget__value').item(0),
        incomesLabel:document.getElementsByClassName('budget__incomes--value').item(0),
        expensesLabel:document.getElementsByClassName('budget__expenses--value').item(0),
        expensesPercentageLabel:document.getElementsByClassName('budget__expenses--percentage').item(0),
        listContainer:document.getElementsByClassName('container').item(0),
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
            if (type === 'incomes'){
                listCotainer = mainBladeComponents.incomesList;
                html = '<div class="item clearfix" id="incomes-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if (type === 'expenses'){
                listCotainer = mainBladeComponents.expensesList;
                html = '<div class="item clearfix" id="expenses-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
          
            // Replace the placeholder texrt with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            // Insert the HTML into the DOM
            listCotainer.insertAdjacentHTML('beforeend',newHtml);
        },
        deleteRecordFromList:function(selectorId){
            let element = document.getElementById(selectorId)
            element.parentNode.removeChild(element);
        },
        clearFields: function(){
            let addRecordFields = new Array(mainBladeComponents.addRecordDescription,mainBladeComponents.addRecordValue);

            addRecordFields.forEach(function(current){
                current.value = "";

            });
            addRecordFields[0].focus();
        },
        displayBudget: function(obj){
            mainBladeComponents.budgetLabel.textContent = obj.budget;
            mainBladeComponents.incomesLabel.textContent = obj.totalIncomes;
            mainBladeComponents.expensesLabel.textContent = obj.totalExpenses;
            if (obj.percentage > 0 ){
                mainBladeComponents.expensesPercentageLabel.textContent = obj.percentage+'%';
            }else {
                mainBladeComponents.expensesPercentageLabel.textContent = '--'
            }
            
        },
        displayPercentages: function(percentages){
            let fields = document.querySelectorAll('.item__percentage');

            let nodeListForEach = function(list,callback){
                for (let i = 0; i < list.length; i++){
                    callback(list[i],i);
                }
            };

            nodeListForEach(fields,function(current,index){
                if (percentages[index] > 0 ){
                    current.textContent = percentages[index] + '%'
                }else {
                    current.textContent = '--'
                }
                
            });
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
        mainBladeComponent.listContainer.addEventListener('click',ctrlDeleteItem);
    };

    let updateBudget = function() {
        // 1. Calculate the budget
        budgetController.calculateBudget();

        // 2. Return the budget
        let budget = budgetController.getBudget();

        // 3. Display the budget on the UI
        uiController.displayBudget(budget)
    };
    
    let updatePercentages = function(){
        // 1. Calculate percentages
        budgetController.calculatePercentages();

        // 2. Get percentages from the budget
        let allPercentages = budgetController.getPercentage();

        // 3. Update the UI with the new percentages
        uiController.displayPercentages(allPercentages);

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

            // 6. Calculate and Update percentages
            updatePercentages();

        }else {
            alert("Invalid description/value fields.")
        }
      
    };

    let ctrlDeleteItem = function(event) {
        let recordId,type,id
        recordId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (recordId) {
            type = recordId.split('-')[0]
            id = parseInt(recordId.split('-')[1])
        }

        // 1. delete the item from the data structure
        budgetController.deleteRecord(type,id)

        // 2. delete the item from the UI
        uiController.deleteRecordFromList(recordId)
        
        // 3. Update and show the new budget
        updateBudget();

        // 4. Calculate and Update percentages
        updatePercentages();    

    };

    return {
        init:function(){
            console.log('Application has started at '+Date())
            uiController.displayBudget({
                budget : 0,
                totalIncomes: 0,
                totalExpenses: 0,
                percentage: -1
            });
            setUpEventListeners();
        }
    };

})(budgetController,uiController);

appController.init();