import { EventItem } from ".";

export const SidebarEventList = () => {
    const events = [...Array(4)];

    return (
        <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-3">
            {events.length > 0 ? (
                events.map((_, i) => <EventItem key={i} />)
            ) : (
                <h1 className="mt-10 text-center text-2xl text-gray-500">Nothing</h1>
            )}
        </div>
    );
};
