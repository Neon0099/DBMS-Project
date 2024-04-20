import TransactionForm from "../TransactionForm";
import AccountsTable from "../AccountsTable";
import TransactionTable from "../TransactionTable";
import Customer from "../Customer";
 const BranchTablePage =()=> {
    return (
        <>
        <TransactionTable/>
        <TransactionForm/>
        <AccountsTable/>
        <Customer/>

        </>
    );
}
export default BranchTablePage;