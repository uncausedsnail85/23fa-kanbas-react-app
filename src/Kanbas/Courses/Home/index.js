import ModuleList from "../Modules/ModuleList";
import "./index.css"

function Home() {
    return (
        <div className="row" >
            <div className="col-9"
            // style="margin-inline-end: 50px; margin-top: 24px;"
            >
                <ModuleList />
            </div>
            <div className="col-3 d-none d-xl-block">
                <h1>Course Status </h1>
                <button type="button">Unpublished</button>
                <button type="button">Published</button>
                <ul>
                    <li>Import Existing Content</li>
                    <li>Import from Commons</li>
                    <li>Choose Home Page</li>
                    <li>View Course Stream</li>
                    <li>New Announcement</li>
                    <li>New Analytics</li>
                    <li>View Course Notifications</li>
                </ul>
                <h1>Coming Up</h1>
                <a class="wd-hyperlink" href="#">View Calendar</a>
                <ul>
                    <li>CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                        Sep 5 at 7pm </li>
                    <li>CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                        Sep 7 at 11:45am</li>
                    <li>CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                        Sep 7 at 7pm</li>
                    <li>CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                        Sep 11 at 11:45am</li>
                </ul>
            </div>
        </div>
    );
}
export default Home;