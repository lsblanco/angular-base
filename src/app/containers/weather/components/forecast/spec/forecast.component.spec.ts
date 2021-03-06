import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { generateMap } from 'base/shared/ModelHelper';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { expect } from 'chai';

import { ForecastComponent } from '../forecast.component';
import { ForecastDetailComponent } from '../../forecast-detail/forecast-detail.component';
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../../../pipes';
import { ForecastModel } from '../../../models';

describe('Calculator / Components', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent, ForecastDetailComponent, HumidityPipe, PressurePipe, TemperaturePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('Weather', () => {
    describe('component: forecast', () => {
      it('should display 2 forecasts detail components', async () => {
        const mockForecasts = [{}, {}];
        component.forecasts = generateMap(mockForecasts, ForecastModel).valueSeq();

        fixture.detectChanges();

        await fixture.whenStable();

        const details = de.queryAll(By.css('weather-forecast-detail'));

        expect(details).to.have.lengthOf(2);
      });
    });
  });
});
