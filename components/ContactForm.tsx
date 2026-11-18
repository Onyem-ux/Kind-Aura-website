"use client";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="contact" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Leave this empty <input name="bot-field" /></label></p>
      <label>Your name <input name="name" required autoComplete="name" /></label>
      <label>Phone or email <input name="contact" required /></label>
      <label>Who needs care?
        <select name="age-group"><option>Child</option><option>Teenager</option><option>Adult</option></select>
      </label>
      <label>County <input name="county" autoComplete="off" /></label>
      <label>How can we help? <textarea name="message" /></label>
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && <p className="note" role="status">Thank you. We received your message and will be in touch soon.</p>}
      {status === "error" && <p className="note err" role="alert">Your message did not send. Please call us at 470-416-5544.</p>}
    </form>
  );
}
