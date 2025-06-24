<script>
  import Radiocheck from './Radiocheck.svelte';

	// Define treatments as an array of objects
  const treatmentsArray = [
    { id: 'treatment-whitening',
			value: 'whitening',
			label: 'Whitening'
		}    
  ];

  // Object to hold checked states for treatments
  let treatments = {
    whitening: false,
    dentalImplants: false,
    allOn4Implants: false,
    dentalCrowns: false
  };
	
	// Variable for other treatment input
  let otherTreatment = '';

</script>

<div class="pa4 bg-light-gray">  
  <main class="flex flex-wrap items-start justify-between pa2 ba b--light-gray br4 bg-white shadow-1">
    <div class="flex flex-wrap justify-between w-100">

			<!-- Treatment -->
      <div class="w-100 w-50-m f6-m f5 w-third-l pa2">
        <div class="bg-near-white pa3 br4">
          <fieldset>
            <legend>Treatment</legend>
            <!-- Treatment Options -->
			      {#each treatmentsArray as treatment}
			        <Radiocheck 
			          type="checkbox" 
			          id={treatment.id} 
			          name="treatment" 
			          value={treatment.value} 
			          label={treatment.label} 
			          bind:checked={treatments[treatment.value]} 
			        />
			      {/each}
						<div class="flex items-center">
							<label for="other-treatment" class="db mb1 w-20">Other</label>
	            <textarea
								style="resize:none"
								id="other-treatment"
								name="other-treatment"
								rows="1"
								bind:value={otherTreatment}
								class="input-reset w-80
											 bg-white b--custom
											 ba bw1-ns
											 ph3
											 pv2 br4 highlight"></textarea>	
          </fieldset>      
        </div>
      </div>

    </div>
  </main>
</div>

<style>
.b--custom {
	border-color: #a8a8a8;
}	
fieldset {
	/* margin: 0rem 0rem 0.25rem; */
  border-radius: 0.75rem;
	border: 0.5px solid #aaa;
}

legend {
  padding: 0 0.5rem 0;
  font-size: small;
  text-align: left;
  text-transform: uppercase;
}
</style>

<svelte:head>
<link rel="stylesheet" href="https://instantwebapp.com/css/tachyon.shower.css">
</svelte:head>