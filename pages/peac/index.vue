<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

            <!--  STEP = 1 Inicio de botones principales -->
            <v-card class="mt-3 ">
                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="3" xs="12" v-for="(e,i) in botones" :key="i">
                            <v-card color="bluegreyt" href="#">

                                <v-card-actions class="justify-center">
                                    <v-avatar size="35" color="" tile>

                                        <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                    </v-avatar> {{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>
            <!--  STEP = 2 Inicio de  PEAC que es -->
            <v-card class="mt-3 mb-3" color="peac">
                <v-col aling="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

                        <v-col cols="12" align="center">

                        </v-col>
                        <v-col cols="12" lg="8" sm="12" v-for="(e,i) in btnitem" :key="i">

                            <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                <v-row align="center">
                                    <v-col cols="12" lg="6" sm="12" align="center" justify="center">

                                        <h2> {{e.title}}</h2>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc}}
                                        </v-card-subtitle>
                                    </v-col>

                                    <v-col cols="12" lg="6" sm="12">
                                        <nuxt-link :to="e.link">

                                            <v-hover>

                                                <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src2)">
                                                </v-img>
                                                <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
                                                </v-img>

                                            </v-hover>
                                        </nuxt-link>
                                    </v-col>

                                </v-row>
                            </v-card>

                        </v-col>

                    </v-row>
                </v-col>

            </v-card>
            <!--  STEP = 3 Inicio de botones secundarios -->
            <v-card class="mt-3  pa-5">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Datos</div>
                </v-card-title>

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="3" xs="12" v-for="(e,i) in botonesSec" :key="i">
                            <v-card color="bluegreyt" href="#">

                                <v-card-actions class="justify-center">
                                    <v-avatar size="50" color="" tile>

                                        <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                    </v-avatar> {{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'peac',
    data() {
        return {
            page: {
                color: 'amber',
                title: 'Pol??tica Estatal Anticorrupci??n.',
                icon: 'mdi-dots-horizontal'
            },
            botones: [{
                    titulo: 'Resumen Ejecutivo',
                    icon: 'resumen.png',
                    doc: ''
                },
                {
                    titulo: 'Descargar PEAC',
                    icon: 'descarga-peac.png',
                    doc: ''
                },
                {
                    titulo: 'Metodolog??a',
                    icon: 'Metodologia.png',
                    doc: ''
                },
                {
                    titulo: 'Datos abiertos',
                    icon: 'datos.png',
                    doc: ''
                },
            ],
            botonesSec: [{
                    titulo: 'Pol??tica Nacional Anticorrupci??n',
                    icon: 'PNA.png',
                    doc: ''
                },
                {
                    titulo: 'Indicadores de corrupci??n',
                    icon: 'IA.png',
                    doc: ''
                },
                {
                    titulo: 'Dise??o de Implementaci??n',
                    icon: 'proceso-de-implementacion.png',
                    doc: ''
                },
                {
                    titulo: 'Indicadores de Seguimiento',
                    icon: 'indicadores.png',
                    doc: ''
                },
            ],
            btnitem: [{
                    title: 'Que es:',
                    desc: 'La Pol??tica Estatal Anticorrupci??n (PEAC) es el documento rector que guiar?? los esfuerzos de las instituciones p??blicas y ciudadanas en materia de prevenci??n, control y combate de los hechos de corrupci??n. Los insumos con los que se construy?? surgen de mecanismos de participaci??n ciudadana, de an??lisis acad??mico y de alineaci??n con la Pol??tica Nacional Anticorrupci??n (PNA).',
                    src1: 'peac1.jpg',
                    src2: 'peac2.jpg',
                    link: '/peac'
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped>

    </style>
