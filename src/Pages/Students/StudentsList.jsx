import { useSelector } from "react-redux";

const StudentsList = () => {
    const students = useSelector((state) => state.student.students)
    console.log(students);
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        students?.map(student =>
                            <tr key={student?.id}>
                                <th>1</th>
                                <td>{`${student.firstName} ${student.lastName}`}</td>
                                <td>{}</td>
                                <td>Blue</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default StudentsList;