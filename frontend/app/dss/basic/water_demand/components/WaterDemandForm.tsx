// components/WaterDemandForm.tsx
'use client';
import React, { useState } from 'react';

interface InstitutionalFields {
    hospitals100Units: string;
    beds100: string;
    hospitalsLess100: string;
    bedsLess100: string;
    hotels: string;
    bedsHotels: string;
    hostels: string;
    residentsHostels: string;
    nursesHome: string;
    residentsNursesHome: string;
    boardingSchools: string;
    studentsBoardingSchools: string;
    restaurants: string;
    seatsRestaurants: string;
    airportsSeaports: string;
    populationLoadAirports: string;
    junctionStations: string;
    populationLoadJunction: string;
    terminalStations: string;
    populationLoadTerminal: string;
    intermediateBathing: string;
    populationLoadBathing: string;
    intermediateNoBathing: string;
    populationLoadNoBathing: string;
    daySchools: string;
    studentsDaySchools: string;
    offices: string;
    employeesOffices: string;
    factorieswashrooms: string;
    employeesFactories: string;
    factoriesnoWashrooms: string;
    employeesFactoriesNoWashrooms: string;
    cinemas: string;
    seatsCinemas: string;
  // Add more fields as needed...
}

interface FirefightingMethods {
  kuchling: boolean;
  freeman: boolean;
  buston: boolean;
  american_insurance: boolean;
  ministry_urban: boolean;
}

const WaterDemandForm: React.FC = () => {
  // State for overall checkboxes
  const [domesticChecked, setDomesticChecked] = useState(false);
  const [floatingChecked, setFloatingChecked] = useState(false);
  const [institutionalChecked, setInstitutionalChecked] = useState(false);
  const [firefightingChecked, setFirefightingChecked] = useState(false);

  // Domestic per capita consumption (default 135)
  const [perCapitaConsumption, setPerCapitaConsumption] = useState(135);

  // Floating fields
  const [floatingPopulation2011, setFloatingPopulation2011] = useState<number | null>(null);
  const [facilityType, setFacilityType] = useState('provided');

  // Institutional fields (sample fields; add more as needed)
  const [institutionalFields, setInstitutionalFields] = useState<InstitutionalFields>({
    hospitals100Units: '',
    beds100: '',
    hospitalsLess100: '',
    bedsLess100: '',
    hotels: '',
    bedsHotels: '',
    hostels: '',
    residentsHostels: '',
    nursesHome: '',
    residentsNursesHome: '',
    boardingSchools: '',
    studentsBoardingSchools: '',
    restaurants: '',
    seatsRestaurants: '',
    airportsSeaports: '',
    populationLoadAirports: '',
    junctionStations: '',
    populationLoadJunction: '',
    terminalStations: '',
    populationLoadTerminal: '',
    intermediateBathing: '',
    populationLoadBathing: '',
    intermediateNoBathing: '',
    populationLoadNoBathing: '',
    daySchools: '',
    studentsDaySchools: '',
    offices: '',
    employeesOffices: '',
    factorieswashrooms: '',
    employeesFactories: '',
    factoriesnoWashrooms: '',
    employeesFactoriesNoWashrooms: '',
    cinemas: '',
    seatsCinemas: '',
  });

  // Firefighting methods selection
  const [firefightingMethods, setFirefightingMethods] = useState<FirefightingMethods>({
    kuchling: false,
    freeman: false,
    buston: false,
    american_insurance: false,
    ministry_urban: false,
  });

  // Handlers for checkboxes and inputs
  const handleDomesticChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomesticChecked(e.target.checked);
  };

  const handlePerCapitaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerCapitaConsumption(Number(e.target.value));
  };

  const handleFloatingPopulationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFloatingPopulation2011(Number(e.target.value));
  };

  const handleInstitutionalFieldChange = (field: keyof InstitutionalFields, value: string) => {
    setInstitutionalFields({
      ...institutionalFields,
      [field]: value,
    });
  };

  const handleFirefightingMethodChange = (method: keyof FirefightingMethods, checked: boolean) => {
    setFirefightingMethods({
      ...firefightingMethods,
      [method]: checked,
    });
  };

  // Example calculation handler – replace with your own calculation logic
  const handleCalculate = () => {
    // Here you would combine your states and compute water demand.
    // For example:
    // const domesticDemand = computedPopulation * (perCapitaConsumption / 1_000_000);
    // Similarly for floating, institutional, and firefighting.
    console.log('Calculating Water Demand with inputs:');
    console.log('Domestic:', domesticChecked, perCapitaConsumption);
    console.log('Floating:', floatingChecked, floatingPopulation2011, facilityType);
    console.log('Institutional:', institutionalChecked, institutionalFields);
    console.log('Firefighting:', firefightingChecked, firefightingMethods);
  };

  return (
    <div className="p-4 border rounded bg-white">
      <h3 className="text-xl font-semibold mb-3">Water Demand Calculation</h3>
      
      {/* Demand Component Checkboxes */}
      <div className="mb-4 space-x-4">
        <label>
          <input type="checkbox" checked={domesticChecked} onChange={handleDomesticChange} /> Domestic
        </label>
        <label>
          <input type="checkbox" checked={floatingChecked} onChange={(e) => setFloatingChecked(e.target.checked)} /> Floating
        </label>
        <label>
          <input type="checkbox" checked={institutionalChecked} onChange={(e) => setInstitutionalChecked(e.target.checked)} /> Institutional
        </label>
        <label>
          <input type="checkbox" checked={firefightingChecked} onChange={(e) => setFirefightingChecked(e.target.checked)} /> Firefighting
        </label>
      </div>
      
      {/* Domestic Fields */}
      {domesticChecked && (
        <div className="mb-4 p-3 border rounded bg-blue-50">
          <h6 className="font-bold text-blue-700">Domestic Fields</h6>
          <label className="block mt-2">
            Per Capita Consumption (L/person/day):
            <input 
              type="number" 
              value={perCapitaConsumption}
              onChange={handlePerCapitaChange}
              className="border rounded ml-2 w-24"
            />
          </label>
        </div>
      )}

      {/* Floating Fields */}
      {floatingChecked && (
        <div className="mb-4 p-3 border rounded bg-blue-50">
          <h6 className="font-bold text-blue-700">Floating Fields</h6>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Floating Population (2011):
                <input 
                  type="number" 
                  value={floatingPopulation2011 ?? ''}
                  onChange={handleFloatingPopulationChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                  placeholder='Enter number'
                />
              </label>
            </div>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium">Facility Type:</label>
            <select 
              value={facilityType}
              onChange={(e) => setFacilityType(e.target.value)}
              className="border rounded px-2 py-1 mt-1"
            >
              <option value="provided">Bathing facilities provided</option>
              <option value="notprovided">Bathing facilities not provided</option>
              <option value="onlypublic">Floating population using only public facilities</option>
            </select>
          </div>
        </div>
      )}

      {/* Institutional Fields */}
      {institutionalChecked && (
        <div className="mb-4 p-3 border rounded bg-blue-50">
          <h6 className="font-bold text-blue-700 mb-3">Institutional Fields</h6>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="hospitals_100_units" className="block text-sm font-medium">
                Hospitals with ≥ 100 Beds (Units):
              </label>
              <input
                type="number"
                id="hospitals_100_units"
                value={institutionalFields.hospitals100Units}
                onChange={(e) => handleInstitutionalFieldChange('hospitals100Units', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="beds_100" className="block text-sm font-medium">
                Beds in Hospitals with ≥ 100 Beds:
              </label>
              <input
                type="number"
                id="beds_100"
                value={institutionalFields.beds100}
                onChange={(e) => handleInstitutionalFieldChange('beds100', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="hospitals_less_100" className="block text-sm font-medium">
                Hospitals with &lt; 100 Beds (Units):
              </label>
              <input
                type="number"
                id="hospitals_less_100"
                value={institutionalFields.hospitalsLess100}
                onChange={(e) => handleInstitutionalFieldChange('hospitalsLess100', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="beds_less_100" className="block text-sm font-medium">
                Beds in Hospitals with &lt; 100 Beds:
              </label>
              <input
                type="number"
                id="beds_less_100"
                value={institutionalFields.bedsLess100}
                onChange={(e) => handleInstitutionalFieldChange('bedsLess100', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="hotels" className="block text-sm font-medium">
                Hotels (Units):
              </label>
              <input
                type="number"
                id="hotels"
                value={institutionalFields.hotels}
                onChange={(e) => handleInstitutionalFieldChange('hotels', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="beds_hotels" className="block text-sm font-medium">
                Beds in Hotels:
              </label>
              <input
                type="number"
                id="beds_hotels"
                value={institutionalFields.bedsHotels}
                onChange={(e) => handleInstitutionalFieldChange('bedsHotels', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="hostels" className="block text-sm font-medium">
                Hostels (Units):
              </label>
              <input
                type="number"
                id="hostels"
                value={institutionalFields.hostels}
                onChange={(e) => handleInstitutionalFieldChange('hostels', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="residents_hostels" className="block text-sm font-medium">
                Residents in Hostels:
              </label>
              <input
                type="number"
                id="residents_hostels"
                value={institutionalFields.residentsHostels}
                onChange={(e) => handleInstitutionalFieldChange('residentsHostels', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="nurses_home" className="block text-sm font-medium">
                Nurses Home (Units):
              </label>
              <input
                type="number"
                id="nurses_home"
                value={institutionalFields.nursesHome}
                onChange={(e) => handleInstitutionalFieldChange('nursesHome', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="residents_nurses_home" className="block text-sm font-medium">
                Residents in Nurses Home:
              </label>
              <input
                type="number"
                id="residents_nurses_home"
                value={institutionalFields.residentsNursesHome}
                onChange={(e) => handleInstitutionalFieldChange('residentsNursesHome', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="boarding_schools" className="block text-sm font-medium">
                Boarding Schools (Units):
              </label>
              <input
                type="number"
                id="boarding_schools"
                value={institutionalFields.boardingSchools}
                onChange={(e) => handleInstitutionalFieldChange('boardingSchools', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="students_boarding_schools" className="block text-sm font-medium">
                Students in Boarding Schools:
              </label>
              <input
                type="number"
                id="students_boarding_schools"
                value={institutionalFields.studentsBoardingSchools}
                onChange={(e) => handleInstitutionalFieldChange('studentsBoardingSchools', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="restaurants" className="block text-sm font-medium">
                Restaurants (Units):
              </label>
              <input
                type="number"
                id="restaurants"
                value={institutionalFields.restaurants}
                onChange={(e) => handleInstitutionalFieldChange('restaurants', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="seats_restaurants" className="block text-sm font-medium">
                Seats in Restaurants:
              </label>
              <input
                type="number"
                id="seats_restaurants"
                value={institutionalFields.seatsRestaurants}
                onChange={(e) => handleInstitutionalFieldChange('seatsRestaurants', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="airports_seaports" className="block text-sm font-medium">
                Airports/Seaports (Units):
              </label>
              <input
                type="number"
                id="airports_seaports"
                value={institutionalFields.airportsSeaports}
                onChange={(e) => handleInstitutionalFieldChange('airportsSeaports', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="population_load_airports" className="block text-sm font-medium">
                Population Load on Airports/Seaports:
              </label>
              <input
                type="number"
                id="population_load_airports"
                value={institutionalFields.populationLoadAirports}
                onChange={(e) => handleInstitutionalFieldChange('populationLoadAirports', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="junction_stations" className="block text-sm font-medium">
                Junction Stations (Units):
              </label>
              <input
                type="number"
                id="junction_stations"
                value={institutionalFields.junctionStations}
                onChange={(e) => handleInstitutionalFieldChange('junctionStations', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="population_load_junction" className="block text-sm font-medium">
                Population Load on Junction Stations:
              </label>
              <input
                type="number"
                id="population_load_junction"
                value={institutionalFields.populationLoadJunction}
                onChange={(e) => handleInstitutionalFieldChange('populationLoadJunction', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="terminal_stations" className="block text-sm font-medium">
                Terminal Stations (Units):
              </label>
              <input
                type="number"
                id="terminal_stations"
                value={institutionalFields.terminalStations}
                onChange={(e) => handleInstitutionalFieldChange('terminalStations', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="population_load_terminal" className="block text-sm font-medium">
                Population Load on Terminal Stations:
              </label>
              <input
                type="number"
                id="population_load_terminal"
                value={institutionalFields.populationLoadTerminal}
                onChange={(e) => handleInstitutionalFieldChange('populationLoadTerminal', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="intermediate_bathing" className="block text-sm font-medium">
                Intermediate Bathing (Units):
              </label>
              <input
                type="number"
                id="intermediate_bathing"
                value={institutionalFields.intermediateBathing}
                onChange={(e) => handleInstitutionalFieldChange('intermediateBathing', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="population_load_bathing" className="block text-sm font-medium">
                Population Load on Intermediate Bathing:
              </label>
              <input
                type="number"
                id="population_load_bathing"
                value={institutionalFields.populationLoadBathing}
                onChange={(e) => handleInstitutionalFieldChange('populationLoadBathing', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="intermediate_no_bathing" className="block text-sm font-medium">
                Intermediate No Bathing (Units):
              </label>
              <input
                type="number"
                id="intermediate_no_bathing"
                value={institutionalFields.intermediateNoBathing}
                onChange={(e) => handleInstitutionalFieldChange('intermediateNoBathing', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="population_load_no_bathing" className="block text-sm font-medium">
                Population Load on Intermediate No Bathing:
              </label>
              <input
                type="number"
                id="population_load_no_bathing"
                value={institutionalFields.populationLoadNoBathing}
                onChange={(e) => handleInstitutionalFieldChange('populationLoadNoBathing', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="day_schools" className="block text-sm font-medium">
                Day Schools (Units):
              </label>
              <input
                type="number"
                id="day_schools"
                value={institutionalFields.daySchools}
                onChange={(e) => handleInstitutionalFieldChange('daySchools', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="students_day_schools" className="block text-sm font-medium">
                Students in Day Schools:
              </label>
              <input
                type="number"
                id="students_day_schools"
                value={institutionalFields.studentsDaySchools}
                onChange={(e) => handleInstitutionalFieldChange('studentsDaySchools', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="factories" className="block text-sm font-medium">
                Factories (Units):
              </label>
              <input
                type="number"
                id="factories"
                value={institutionalFields.factorieswashrooms}
                onChange={(e) => handleInstitutionalFieldChange('factorieswashrooms', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="employees_factories" className="block text-sm font-medium">
                Employees in Factories (with Washrooms):
              </label>
              <input
                type="number"
                id="employees_factories"
                value={institutionalFields.employeesFactories}
                onChange={(e) => handleInstitutionalFieldChange('employeesFactories', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="factories_no_washrooms" className="block text-sm font-medium">
                Employees in Factories (without Washrooms):
              </label>
              <input
                type="number"
                id="factories_no_washrooms"
                value={institutionalFields.factoriesnoWashrooms}
                onChange={(e) => handleInstitutionalFieldChange('factoriesnoWashrooms', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />              
            </div>
            <div>
              <label htmlFor="employees_factories_no_washrooms" className="block text-sm font-medium">
                Employees in Factories (No Washrooms):
              </label>
              <input
                type="number"
                id="employees_factories_no_washrooms"
                value={institutionalFields.employeesFactoriesNoWashrooms}
                onChange={(e) => handleInstitutionalFieldChange('employeesFactoriesNoWashrooms', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div> 
           
            <div>
              <label htmlFor="cinemas" className="block text-sm font-medium">
                Cinemas (Units):
              </label>
              <input
                type="number"
                id="cinemas"
                value={institutionalFields.cinemas}
                onChange={(e) => handleInstitutionalFieldChange('cinemas', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label htmlFor="seats_cinemas" className="block text-sm font-medium">
                Seats in Cinemas:
              </label>
              <input
                type="number"
                id="seats_cinemas"
                value={institutionalFields.seatsCinemas}
                onChange={(e) => handleInstitutionalFieldChange('seatsCinemas', e.target.value)}
                className="mt-1 block w-full border rounded px-2 py-1"
                placeholder="Enter number"
              />
            </div>
              
            
            {/* Continue adding additional institutional fields as needed */}
          </div>
        </div>
      )}

      {/* Firefighting Fields */}
      {firefightingChecked && (
        <div className="mb-4 p-3 border rounded bg-blue-50">
          <h6 className="font-bold text-blue-700 mb-3">Firefighting Fields</h6>
          <div className="mb-3">
            <label className="block text-sm font-medium">Select Firefighting Methods:</label>
            <div className="flex flex-wrap gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="firefighting_method_kuchling"
                  checked={firefightingMethods.kuchling}
                  onChange={(e) => handleFirefightingMethodChange('kuchling', e.target.checked)}
                  className="mr-2"
                />
                Kuchling's Method
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="firefighting_method_freeman"
                  checked={firefightingMethods.freeman}
                  onChange={(e) => handleFirefightingMethodChange('freeman', e.target.checked)}
                  className="mr-2"
                />
                Freeman Method
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="firefighting_method_buston"
                  checked={firefightingMethods.buston}
                  onChange={(e) => handleFirefightingMethodChange('buston', e.target.checked)}
                  className="mr-2"
                />
                Buston Method
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="firefighting_method_american_insurance"
                  checked={firefightingMethods.american_insurance}
                  onChange={(e) => handleFirefightingMethodChange('american_insurance', e.target.checked)}
                  className="mr-2"
                />
                American Insurance Association Method
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="firefighting_method_ministry_urban"
                  checked={firefightingMethods.ministry_urban}
                  onChange={(e) => handleFirefightingMethodChange('ministry_urban', e.target.checked)}
                  className="mr-2"
                />
                Ministry of Urban Development Method
              </label>
            </div>
          </div>
          <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded">
            Calculate Firefighting Water Demand
          </button>
          <div id="firefighting_result" className="mt-3"></div>
        </div>
      )}

      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleCalculate}
      >
        Calculate Water Demand
      </button>
    </div>
  );
};

export default WaterDemandForm;
