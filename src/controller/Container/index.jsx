import React from "react";

const ui = (
    <nav className="flex justify-center space-x-4">
        <a href="/dashboard"
           className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
        <a href="/team"
           className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Team</a>
        <a href="/projects"
           className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Projects</a>
        <a href="/reports"
           className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Reports</a>
    </nav>
);

export class Container extends React.Component {
    render() {
        return ui;
    }
}