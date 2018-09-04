<template>
  <v-content>
    <!-- Clients -->
    <v-layout row wrap>
      <v-container fluid grid-list-md>
        <v-card dark class="primary">
          <v-card-title>
            <h2 class="secondary--text">Clients</h2>
            <v-spacer></v-spacer>
            <v-text-field
              class="secondary--text"
              v-model="searchClient"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-iterator
            :items="clientItems"
            :rows-per-page-items="rowsPerPageClients"
            :pagination.sync="paginationClients"
            :search="searchClient"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item" slot-scope="props" xs12 sm6 md4 lg3>

              <v-card>
                <v-card-title class="accent" primary-title>
                    <h3 class="mb-0">{{ props.item.name}}</h3>
                    <v-spacer></v-spacer>
                    Status: {{ props.item.status}}
                </v-card-title>

              </v-card>
              <v-expansion-panel popout>
               <v-expansion-panel-content class="success">
                 <div slot="header" class="text-xs-right">Bill Statement</div>
                   <h4>Items:</h4>
                   <v-card-text class="text-xs-right">
                     {{ props.item.statement}}
                     <v-spacer></v-spacer>
                     Total Price: {{ props.item.price}} $
                   </v-card-text>

               </v-expansion-panel-content>
             </v-expansion-panel>

            </v-flex>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ searchClient }}" found no results.
            </v-alert>
          </v-data-iterator>
        </v-card>
      </v-container>
    </v-layout>

    <!-- Products -->
    <v-layout row wrap>
      <v-container fluid grid-list-md>
        <v-card dark class="primary">
          <v-card-title>
            <h2 class="secondary--text">Products</h2>
            <v-spacer></v-spacer>
            <v-text-field
              class="secondary--text"
              v-model="searchProd"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-iterator
            :items="productItems"
            :rows-per-page-items="rowsPerPageProducts"
            :pagination.sync="paginationProd"
            :search="searchProd"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item" slot-scope="props" xs12 sm6 md4 lg3>

              <v-card>
                <v-img style="cursor: pointer"
                  :src="props.item.imageUrl"
                  :key="props.item.id"
                  height="300px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">{{ props.item.name}}</h3>
                    <div>Code: {{ props.item.code}}</div>
                    <div>Price: {{ props.item.price}}</div>
                  </div>
                </v-card-title>

                <v-card-actions style="cursor: pointer">
                  <v-btn flat color="orange">Purchase</v-btn>
                  <v-btn flat color="orange">BOBO DAMIEL</v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ searchProd }}" found no results.
            </v-alert>
          </v-data-iterator>
        </v-card>
      </v-container>
    </v-layout>

    <!-- Projects -->
    <v-layout row wrap>
      <v-container fluid grid-list-md>
        <v-card dark class="primary">
          <v-card-title>
            <h2 class="secondary--text">Projects</h2>
            <v-spacer></v-spacer>
            <v-text-field
              class="secondary--text"
              v-model="searchClient"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-iterator
            :items="clientItems"
            :rows-per-page-items="rowsPerPageClients"
            :pagination.sync="paginationClients"
            :search="searchClient"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item" slot-scope="props" xs12 sm6 md4 lg3>



            </v-flex>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ searchClient }}" found no results.
            </v-alert>
          </v-data-iterator>
        </v-card>
      </v-container>
    </v-layout>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      searchClient: '',
      rowsPerPageClients: [4, 8, 12],
      paginationClients: {
        rowsPerPageClients: 4
      },
      clientItems: [
        {
          id: '1',
          name: 'QWE',
          status: 'Pending',
          statement: 'Kani, Kana, Kato',
          price: 'Bobo Damiel'
        },
        {
          id: '2',
          name: 'WEQ',
          status: 'On-Going',
          statement: 'Kana, Kato, Kani',
          price: 'Bobo Alfred'
        },
        {
          id: '3',
          name: 'EQW',
          status: 'Cancelled',
          statement: 'Kato, Kani, Kana',
          price: 'BANGS SUNSHINE'
        },
        {
          id: '4',
          name: 'EWQ',
          status: 'Finished Task',
          statement: 'Kato, Kana, Kani',
          price: 'LOVE BANGS'
        }
      ],
      searchProd: '',
      rowsPerPageProducts: [4, 8, 12],
      paginationProd: {
        rowsPerPageProd: 4
      },
      productItems: [
        {
          id: '1',
          name: 'ARDUINO UNO REV3',
          code: 'A000066',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/500x375/f8876a31b63532bbba4e781c30024a0a/a/0/a000066_front_3.jpg',
          price: '$22.00'
        },
        {
          id: '3',
          name: 'ARDUINO 101',
          code: 'ABX00005',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/A/B/ABX00005_featured_2.jpg',
          price: 'Not Available'
        },
        {
          id: '4',
          name: 'ARDUINO MICRO',
          code: 'A000053',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000053_featured_2.jpg',
          price: '$19.80'
        },
        {
          id: '5',
          name: 'ARDUINO MEGA 2560 REV3',
          code: 'A000067',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000067_featured_1_.jpg',
          price: '$38.50'
        },
        {
          id: '6',
          name: 'GENUINO ZERO',
          code: 'GBX00003',
          imageUrl: 'https://store-cdn.arduino.cc/uni/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/G/B/GBX00003_featured_2.jpg',
          price: '€39.00'
        },
        {
          id: '7',
          name: 'ARDUINO DUE',
          code: 'A000062',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/A/0/A000062_featured_2.jpg',
          price: '$37.40'
        },
        {
          id: '8',
          name: 'ARDUINO MEGA ADK REV3',
          code: 'A000069',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/A/0/A000069_featured_2.jpg',
          price: 'RETIRED'
        },
        {
          id: '2',
          name: 'ARDUINO LEONARDO WITH HEADERS',
          code: 'A000057',
          imageUrl: 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/A/0/A000057_featured_2.jpg',
          price: '$19.80 '
        }
      ],
      searchProj: '',
      rowsPerPageProjects: [4, 8, 12],
      paginationProj: {
        rowsPerPageProj: 4
      },
      projectItems: {

      }
    })
  }
</script>
