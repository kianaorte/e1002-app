import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Calendar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Agenda</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Get Haircut</p>
        <p>Sweet treat appointment</p>
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Calendar;
