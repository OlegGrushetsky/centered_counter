import { describe, expect, test } from "vitest";
import { factory } from "./factory.ts";

describe("counters", () => {
  describe("existing tests", () => {
    test("creates a count function", function () {
      const count = factory(1, 1);
      expect(count()).toBe(2);
      expect(count()).toBe(3);
    });

    test("creates a count starting from 10 with a step of 5", function () {
      const count = factory(10, 5);
      expect(count()).toBe(15);
      expect(count()).toBe(20);
    });

    test("defaults to start 0, step 1 when no arguments passed", function () {
      const count = factory();
      expect(count()).toBe(1);
      expect(count()).toBe(2);
    });
  });

  describe("parameters", () => {
    test("should run if no parameters provided", function () {
      const count = factory();
      expect(count()).toBe(1);
      expect(count()).toBe(2);
    });

    test("should run if no start defined", function () {
      const count = factory(undefined, 5);
      expect(count()).toBe(5);
      expect(count()).toBe(10);
    });

    test("should run if no step defined", function () {
      const count = factory(10, 1);
      expect(count()).toBe(11);
      expect(count()).toBe(12);
    });
  });

  describe("functionality", () => {
    test("should count backward", function () {
      const count = factory(10, -1);
      expect(count()).toBe(9);
      expect(count()).toBe(8);
    });

    test("should count negative numbers", function () {
      const count = factory(0, -1);
      expect(count()).toBe(-1);
      expect(count()).toBe(-2);
    });
  });

  describe("concurrency", () => {
    test("should work as independent counters", function () {
      const count1 = factory(1, 1);
      const count2 = factory(100, 10);
      expect(count1()).toBe(2);
      expect(count2()).toBe(110);
      expect(count1()).toBe(3);
      expect(count2()).toBe(120);
    });
  });
});
