import { useEffect, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [service, setService] = useState({
    web: false,
    mobile: false,
    uiux: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }

    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [success, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !name ||
      name.trim().length === 0 ||
      !email ||
      email.trim().length === 0
    ) {
      setError("please complete your information data");
      setLoading(false);
      return;
    } else if (!desc || desc.trim().length === 0) {
      setError("please fill out your project description");
      setLoading(false);
      return;
    } else if (!service.web && !service.mobile && !service.uiux) {
      setError("you need to choose at least one of our services");
      setLoading(false);
      return;
    }

    const enteredData = {
      name,
      email,
      service,
      desc,
    };

    console.log(enteredData);
    setTimeout(() => {
      setSuccess(
        "Your project request has been sent!, we will reach you out through email for further steps!"
      );
      setLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={submitHandler} className="mb-24">
      <div className="input-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What should we call you..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="checkbox-control">
        <h4>Select one or more service below</h4>
        <div className="grid grid-cols-3 gap-4 text-center items-center">
          {/* web service */}
          <label
            htmlFor="website"
            className={`${service.web ? "bg-orange-sol" : "bg-scnd-blue "}`}
          >
            Website
          </label>
          <input
            type="checkbox"
            name="website"
            id="website"
            checked={service.web}
            onChange={() =>
              setService((prev) => {
                return { ...prev, web: !prev.web };
              })
            }
          />
          {/* mobile service */}
          <label
            htmlFor="mobile-app"
            className={`${service.mobile ? "bg-orange-sol" : "bg-scnd-blue "}`}
          >
            Mobile App
          </label>
          <input
            type="checkbox"
            name="mobile-app"
            id="mobile-app"
            checked={service.mobile}
            onChange={() =>
              setService((prev) => {
                return { ...prev, mobile: !prev.mobile };
              })
            }
          />
          {/* uiux service */}
          <label
            htmlFor="ui-ux"
            className={`${service.uiux ? "bg-orange-sol" : "bg-scnd-blue "}`}
          >
            UI-UX Design
          </label>
          <input
            type="checkbox"
            name="ui-ux"
            id="ui-ux"
            checked={service.uiux}
            onChange={() =>
              setService((prev) => {
                return { ...prev, uiux: !prev.uiux };
              })
            }
          />
        </div>
      </div>
      <div className="input-control">
        <label htmlFor="desc">Project Description</label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="5"
          placeholder="We need help to design..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </div>
      {error && (
        <p className="text-sm text-white-sol bg-red-600 rounded-t-lg py-2 px-4 text-center">
          {error}
        </p>
      )}
      {success && (
        <p className="text-sm text-white-sol bg-green-600 rounded-t-lg py-2 px-4 text-center">
          {success}
        </p>
      )}
      <button
        className={`${
          loading ? "bg-blue-400" : "bg-orange-sol"
        } font-bold w-full py-3 rounded-b-md transition duration-300 ${
          error || success ? "rounded-t-none" : "rounded-t-md"
        }`}
      >
        {loading ? "Loading..." : "Send Form"}
      </button>
    </form>
  );
};

export default ContactForm;
