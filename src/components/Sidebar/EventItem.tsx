import { Button } from "../ui";

export const EventItem = () => (
    <div className="flex justify-between items-center p-4 border border-white/10 hover:bg-white/5 transition-colors duration-200 cursor-pointer">
        <div>
            <h2 className="font-semibold text-2xl text-white">Подія</h2>
            <p className="text-gray-400 text-sm">11 April 14:24 – 12 April 15:24</p>
        </div>

        <div className="flex gap-2">
            <Button size="sm" rounded onClick={() => console.log('+')}>+</Button>
            <Button size="sm" rounded onClick={() => console.log('-')}>-</Button>
        </div>
    </div>
);
