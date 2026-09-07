"use client";

import { useState, FormEvent } from "react";
import AeoFields from "./AeoFields";
import { SITE } from "@/lib/site";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const RESORT_OPTIONS = ["Arizona Snowbowl", "Sunrise Park Resort", "Mount Lemmon Ski Valley", "Not Sure Yet"];
const EXPERIENCE_OPTIONS = ["Never Skied/Snowboarded", "Beginner", "Some Experience", "Booking for Kids"];

export default function BookLessonForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("bot-field")) return;

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white border border-juniper/20 p-8 text-center">
        <p className="font-head text-xl font-bold text-ink mb-2">Request received.</p>
        <p className="text-inkSoft text-sm">
          We&apos;ll reach out shortly to confirm details. For anything urgent, call{" "}
          <a href={SITE.phoneHref} className="text-gold font-semibold">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="book-a-lesson"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <input type="hidden" name="form-name" value="book-a-lesson" />
      <AeoFields />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block text-sm font-medium text-ink mb-1">Full Name</label>
        <input
          required
          name="name"
          type="text"
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Phone</label>
        <input
          required
          name="phone"
          type="tel"
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
          placeholder="(555) 555-0100"
        />
                    <div>
                      <label htmlFor="street_address" className="block text-sm font-medium mb-2">
                        Job / property address *
                      </label>
                      <input
                        id="street_address"
                        name="street_address"
                        type="text"
                        required
                        className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-2">
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
                        defaultValue=""
                      >
                        <option value="">Select a state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium mb-2">
                        ZIP Code *
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{5}(-[0-9]{4})?"
                        maxLength={10}
                        required
                        className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-gold"
                      />
                    </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Preferred Resort</label>
          <select
            required
            name="preferred-resort"
            defaultValue=""
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink focus:outline-none focus:border-gold"
          >
            <option value="" disabled>Select one</option>
            {RESORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Experience Level</label>
          <select
            required
            name="experience-level"
            defaultValue=""
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink focus:outline-none focus:border-gold"
          >
            <option value="" disabled>Select one</option>
            {EXPERIENCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-rust">
          Something went wrong. Please call{" "}
          <a href={SITE.phoneHref} className="underline">{SITE.phone}</a> instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-juniper px-6 py-3 text-sm font-bold text-white hover:bg-juniperDark transition-colors disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Submitting…" : "Book a Lesson"}
      </button>
    </form>
  );
}
