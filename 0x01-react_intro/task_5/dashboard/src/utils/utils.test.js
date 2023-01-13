import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";
import { assert } from 'chai';


describe('utility funcs', () => {
  describe('getFullYear', () => {
    it('checks getFullYear returns the correct year', function() {
      assert.equal(getFullYear(), 2023);
    });
  });
  describe('getFooterCopy', () => {
    it('checks getFooterCopy returns the correct output', function() {
      assert.equal(getFooterCopy(true), 'Holberton School');
      assert.equal(getFooterCopy(false), 'Holberton School main dashboard');
    });
  });
  describe('getLatestNotification', () => {
    it('checks getLatestNotification returns the correct output', function() {
      assert.equal(getLatestNotification(), "<strong>Urgent requirement</strong> - complete by EOD");
    });
  });
})