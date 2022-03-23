import { Container } from "./Styles";
import SelectIcon from "../../components/shared/SelectIcon";
import DateSelector from "../../components/shared/DateSelector";
import Button from "../../components/shared/Button";

export default function FilterReports() {
  return (
    <Container>
      <SelectIcon name="projects" id="projects" title="All project" />
      <SelectIcon name="gateways" id="gateways" title="All gateway" />
      <DateSelector type="date" id="startDate" name="From date" />
      <DateSelector type="date" id="endDate" name="To date" />
      <Button color="005B96">Generate Report</Button>
    </Container>
  );
}
