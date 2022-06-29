import { Summary } from "../Summary";
import { Table } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <Table />
    </Container>
  )
}