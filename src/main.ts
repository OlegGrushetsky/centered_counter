import { factory } from "./factory/factory.ts";

// Get elements
const start_at_control = document.querySelector(
  "#start_at",
) as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;
const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

// Setup listeners
start_at_control?.addEventListener("change", () =>
  update_count_and_reset_counter(),
);
step_control?.addEventListener("change", () =>
  update_count_and_reset_counter(),
);

count_button.addEventListener("click", update_count);

// Initiate counter
let count = factory(0, 1);

/**
 * Handle counter increment
 */
function update_count() {
  const value = count();
  current_count.innerText = String(value);
}

/**
 * Handle counter setup
 */
function update_count_and_reset_counter() {
  const start = Number(start_at_control.value);
  const step = Number(step_control.value);

  count = factory(start, step);
  current_count.innerText = String(start);
}
