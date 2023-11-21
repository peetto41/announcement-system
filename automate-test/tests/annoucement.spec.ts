import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // เทสเพิ่มข้อข้อมูล
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: ' เพิ่มข้อมูล' }).click();
  await page.locator('#title').click();
  await page.locator('#title').fill('yyy');
  await page.getByLabel('รายละเอียด*').click();
  await page.getByLabel('รายละเอียด*').fill('yyy');
  await page.getByRole('button', { name: 'บันทึกข้อมูล' }).click();
  // เทสลบข้อมูล
  await page.goto('http://localhost:4200/');
  await page.locator('tr:nth-child(28) > td:nth-child(4) > button').click();
  await page.getByRole('button', { name: 'ตกลง' }).click();
  // เทสหน้าแก้ไขข้อมูล
  await page.goto('http://localhost:4200/');
  await page.locator('tr:nth-child(31) > td:nth-child(4) > a').click();
  await page.getByLabel('หัวช้อ*').click();
  await page.getByLabel('หัวช้อ*').fill('yyy1');
  await page.getByLabel('รายละเอียด*').click();
  await page.getByLabel('รายละเอียด*').fill('yyy1');
  await page.getByRole('button', { name: 'แก้ไขข้อมูล' }).click();
});