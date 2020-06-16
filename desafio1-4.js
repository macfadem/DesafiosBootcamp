// Intro

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

// Adicionar transações
function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

// Relatórios

function getHigherTransactionByType(type) {
    let biggestTran = 0
    let biggestValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > biggestValue) {
            biggestValue = transaction.value
            biggestTran = transaction
        }
    }

    return biggestTran
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum += transaction.value
    }

    let final = sum / user.transactions.length

    return final
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

//Exemplo de resultado final do projeto:

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }