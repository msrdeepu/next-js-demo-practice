import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetup = () => {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
