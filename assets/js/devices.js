const descriptions = {
  oura: `Oura Ring – The Oura ring actively collects over 20 metrics when worn, including heart rate,
blood oxygen, body temperature, and sleep measurements throughout the day. These metrics
are available via a mobile app that organizes your data into easy-to-understand reports.`,

  Tasso Mini: `Tasso Mini At-Home Blood Collection Device – The Tasso Mini is a small, lightweight,
single-use device that attaches to the upper arm. By pressing a button on the device, a
virtually painless capillary blood sample is collected on a cartridge within the device. The
stable, dried, blood sample within the cartridge is then mailed to the study team for multiomics analysis.`,

  Dexcom: `Dexcom Stelo CGM – The Stelo Glucose Biosensor is a continuous glucose monitoring
technology from Dexcom and is simple and painless to apply. By sending glucose levels directly to
your smartphone, the allows you to see connections between your daily lifestyle choices and
glucose levels.`,

  MIR: `MIR Spirometer – The MRI Spirometer enables users to take accurate and precise
measurements of respiratory functions at home, enabling continuous, real-world assessment of
lung function, which is relevant for individuals at risk for or managing cardiometabolic diseases
and cardiovascular diseases.`,

  withings: `Withings Smart Scale – This digital scale provides continuous, at-home weight monitoring,
delivering a key metric that can be seamlessly integrated with other health data. By correlating
weight trends with blood pressure, CGM, spirometry, and other physiological metrics, this data
enhances the study’s ability to track longitudinal health changes and assess individual responses
to lifestyle interventions.`,

  bp_withings: `Withings Blood Pressure Monitor – This wireless blood pressure monitoring cuff seamlessly
integrates with weight, CGM, and spirometry data in the Digital Twin study, enabling daily
tracking to enhance cardiovascular health assessment and support personalized interventions,
making blood pressure a key metric in comprehensive digital health monitoring.`,

  PorpleAir: `PurpleAir Home Air Quality Monitor – The home air quality monitor provides real-time tracking
of indoor air quality, capturing PM2.5, VOCs, and CO2 levels to assess environmental impacts on
cardiometabolic and respiratory health. By linking air quality data with other study data, it
enhances the study’s ability to monitor longitudinal health trends and support personalized
interventions.`,

  Silicon_band: `Silicones Wristbands for Personal and Home Chemical Exposure Monitoring – The
silicone wristbands serve as passive personal chemical exposome monitors, capturing airborne
and skin-contact contaminants to assess individual environmental exposures in the study. By
analyzing accumulated pollutants alongside other study data, these wristbands provide insights
into the impact of chemical exposures on cardiometabolic and respiratory health. Their
wearable, non-invasive design enables continuous exposure assessment, supporting a
comprehensive understanding of environmental influences on long-term health outcomes.`,
};

function showDescription(id) {
  const box = document.getElementById("sharedDescription");
  box.textContent = descriptions[id] || "No description available.";
}