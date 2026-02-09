import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import YourTasks from "../components/YourTasks";
import CaseNotifications from "../components/CaseNotifications";
import Schedule from "../components/ScheduleCard";
import Messages from "../components/MessagePaymentUpdate";
import One from "../assets/Icon/One.png";
import Two from "../assets/Icon/Two.png";
import Three from "../assets/Icon/Three.png";
import Four from "../assets/Icon/Four.png";
const actions = [
  { label: "Check Calendar", icon: One },
  { label: "Manage Cases", icon: One },
  { label: "Check Docs", icon: One },
  { label: "All Tools", icon: One },
  { label: "Raise Tickets", icon: One },
  { label: "Take Notes", icon: One },
];

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-100 p-10 min-h-full">
      <Topbar />

      {/* Stats */}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-16 mb-6">
        <StatCard
          title="Active Cases"
          value="42"
          change="12% from last month"
          changeType="up"
          icon={One}
        />

        <StatCard
          title="Pending Tasks"
          value="17"
          change="4% from last week"
          changeType="down"
          icon={Two}
        />

        <StatCard
          title="Revenue"
          value="28,250"
          change="12% from last month"
          changeType="up"
          icon={Three}
        />

        <StatCard
          title="Total Clients"
          value="87"
          change="12% from last month"
          changeType="up"
          icon={Four}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-6 gap-10 mb-6">
        {actions.map((item) => (
          <QuickAction key={item.label} label={item.label} Imagee={item.icon} />
        ))}
      </div>

      {/* Bottom Section */}
<div className="grid grid-cols-10 gap-10 mt-6">
  {/* Left big column */}
  <div className="col-span-4">
    <YourTasks />
  </div>

  {/* Right column */}
  <div className="col-span-6 grid grid-rows-2 gap-10">
    <div className="grid grid-cols-2 gap-10">
      <CaseNotifications />
      <Schedule />
    </div>

    <Messages />
  </div>
</div>

    </div>
  );
}

